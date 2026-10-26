import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource/work-sans/latin-500.css";
import "@fontsource/work-sans/latin-600.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";
import "@fontsource/jetbrains-mono/latin-600.css";
import "./index.css";
import App from "./App";
import { SITE_DOMAIN, UMAMI_SCRIPT_URL, UMAMI_WEBSITE_ID } from "./content";

if (UMAMI_WEBSITE_ID) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = UMAMI_SCRIPT_URL;
  script.dataset.websiteId = UMAMI_WEBSITE_ID;
  script.dataset.domains = `${SITE_DOMAIN},www.${SITE_DOMAIN}`;
  document.head.appendChild(script);
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The built pages already hold the rendered site, so attach to it instead of rebuilding it. The two legal
// pages are long runs of text with inline links, which the browser re-splits when it saves the HTML, so
// they are rendered fresh.
const root = document.getElementById("root")!;
const legal = ["/cookiepolitik", "/privatlivspolitik"].includes(window.location.pathname.replace(/\/$/, ""));
if (root.hasChildNodes() && !legal) hydrateRoot(root, app);
else createRoot(root).render(app);
