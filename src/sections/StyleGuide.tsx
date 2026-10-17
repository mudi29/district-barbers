import { Button } from "@/components/ui/button";

// A living style guide: everything here renders from the same Tailwind tokens and
// colour schemes the real site uses, so it always matches what's on the pages.

const colors = [
  { name: "Ink", value: "#070707", note: "headings & body text" },
  { name: "Paper", value: "#F5F5F5", note: "scheme 1 background" },
  { name: "Paper secondary", value: "#E8E8E8", note: "scheme 1 cards" },
  { name: "Steel", value: "#BCBDC8", note: "scheme 2 background" },
  { name: "Steel secondary", value: "#9C9DA6", note: "scheme 2 cards" },
  { name: "Rust", value: "#AA2C0D", note: "accent" },
];

const headings = [
  { tag: "H1", cls: "text-h1", label: "District Barbers" },
  { tag: "H2", cls: "text-h2", label: "Choose your barber" },
  { tag: "H3", cls: "text-h3", label: "No preference?" },
  { tag: "H4", cls: "text-h4", label: "Ready when you are" },
  { tag: "H5", cls: "text-h5", label: "Haircut" },
  { tag: "H6", cls: "text-h6", label: "Find us" },
];

const bodyText = [
  { cls: "text-large", label: "Large — 1.25rem" },
  { cls: "text-medium", label: "Medium — 1.125rem (buttons & intros)" },
  { cls: "text-regular", label: "Regular — 1rem (default body)" },
  { cls: "text-small", label: "Small — 0.875rem (captions)" },
  { cls: "text-tiny", label: "Tiny — 0.75rem" },
];

const Swatch = ({ name, value, note }: { name: string; value: string; note: string }) => (
  <div>
    <div className="h-24 w-full border border-scheme-border" style={{ backgroundColor: value }} />
    <p className="mt-3 font-heading text-small font-semibold uppercase">{name}</p>
    <p className="text-small">{value}</p>
    <p className="text-small text-scheme-text/60">{note}</p>
  </div>
);

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-t border-scheme-border py-12 md:py-16">
    <h2 className="mb-8 text-h4">{title}</h2>
    {children}
  </section>
);

export const StyleGuide = () => (
  <main className="scheme-1 min-h-svh px-[5%] py-16 md:py-20">
    <div className="container max-w-5xl">
      <a href="/" className="text-small underline underline-offset-4">← back to site</a>
      <h1 className="mt-6 text-h1">Style guide</h1>
      <p className="mt-4 max-w-[35rem] text-medium">
        The design tokens behind District Barbers. Edit them in{" "}
        <code className="bg-scheme-background-secondary px-1">tailwind.config.cjs</code> and{" "}
        <code className="bg-scheme-background-secondary px-1">src/index.css</code>; this page updates with them.
      </p>

      <Block title="Colours">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {colors.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
      </Block>

      <Block title="Colour schemes">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="scheme-1 border border-scheme-border p-8">
            <p className="font-heading text-small font-semibold uppercase">Scheme 1 — light</p>
            <h3 className="mt-3 text-h5">Heading on paper</h3>
            <p className="mt-2">Body text sits on the light grey background.</p>
            <p className="mt-2 font-semibold text-scheme-accent">Accent text in rust.</p>
          </div>
          <div className="scheme-2 border border-scheme-border p-8">
            <p className="font-heading text-small font-semibold uppercase">Scheme 2 — steel</p>
            <h3 className="mt-3 text-h5">Heading on steel</h3>
            <p className="mt-2">Used for the reviews and info sections.</p>
            <p className="mt-2 font-semibold text-scheme-accent">Accent text.</p>
          </div>
        </div>
      </Block>

      <Block title="Headings — Work Sans, uppercase">
        <div className="flex flex-col gap-6">
          {headings.map((h) => (
            <div key={h.tag} className="flex flex-col gap-1 border-b border-scheme-border pb-6 md:flex-row md:items-baseline md:gap-6">
              <span className="w-16 shrink-0 text-small text-scheme-text/60">{h.tag}</span>
              <span className={`${h.cls} font-heading font-semibold uppercase`}>{h.label}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Body text — JetBrains Mono">
        <div className="flex flex-col gap-4">
          {bodyText.map((t) => (
            <p key={t.cls} className={t.cls}>
              {t.label} — the quick brown fox jumps over the lazy dog.
            </p>
          ))}
        </div>
      </Block>

      <Block title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="link" size="link">Link button →</Button>
        </div>
        <div className="mt-6 scheme-2 inline-flex flex-wrap items-center gap-4 p-6">
          <Button>On steel</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </Block>

      <Block title="Cards">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border border-scheme-border p-8">
            <h3 className="text-h5">Bordered card</h3>
            <p className="mt-3">Used for the barbers and the price list. Sharp corners, 1px border.</p>
          </div>
          <div className="bg-scheme-background-secondary p-8">
            <h3 className="text-h5">Filled card</h3>
            <p className="mt-3">Used for the CTA banners. Secondary background, no border.</p>
          </div>
        </div>
      </Block>
    </div>
  </main>
);
