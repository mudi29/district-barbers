// Bakes the rendered Danish (/) and English (/en/) pages into dist as plain HTML, so crawlers that do not
// run scripts still see the headings, text, meta tags and structured data. Uses the Chrome that is already
// installed (present on GitHub's ubuntu runners), so nothing is downloaded.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { preview } from "vite";
import { chromium } from "playwright-core";

const pages = [
  { url: "/", out: "index.html" },
  { url: "/en/", out: path.join("en", "index.html") },
  { url: "/cookiepolitik", out: "cookiepolitik.html" },
  { url: "/privatlivspolitik", out: "privatlivspolitik.html" },
  // Served by the server for unknown addresses; the app shows its not-found view there.
  { url: "/404", out: "404.html", notFound: true },
];

const server = await preview({ preview: { port: 4179, strictPort: true, open: false } });
const browser = await chromium.launch({ channel: "chrome" });

try {
  const rendered = [];
  for (const { url, out, notFound } of pages) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(`http://localhost:4179${url}`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("h1", { state: "attached" });
    await page.evaluate(() => {
      // Analytics is injected at runtime; the live page adds it again, so keep it out of the snapshot.
      document.querySelectorAll("script[data-website-id]").forEach((el) => el.remove());
    });
    await page.evaluate(() => {
      // React sets "muted" as a property, so it never reaches the saved HTML. Browsers only start a video
      // by themselves when the attribute is there, so write it in and the hero starts before any script runs.
      document.querySelectorAll("video").forEach((v) => v.setAttribute("muted", ""));
    });
    if (notFound) {
      await page.evaluate(() => {
        document.head.querySelector('link[rel="canonical"]')?.remove();
        const robots = document.createElement("meta");
        robots.name = "robots";
        robots.content = "noindex";
        document.head.appendChild(robots);
      });
    }
    const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
    rendered.push({ out, html });
    await page.close();
  }
  // Write only after both pages are captured, because the preview server serves dist from disk.
  for (const { out, html } of rendered) {
    const file = path.join("dist", out);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html);
    console.log(`prerendered ${file} (${(html.length / 1024).toFixed(0)} kB)`);
  }
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}
