/** District Barbers style guide, mirrored from the Relume site (districtbarbers.relumesite.ai). */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      gradientColorStops: ({ theme }) => theme("colors"),
      fontFamily: {
        heading: ['"Work Sans"', "system-ui", "sans-serif"],
        body: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      // Relume type ramp, sized to the District Barbers style guide (desktop).
      fontSize: {
        h1: ["4rem", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
        h2: ["3.25rem", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
        h3: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
        h4: ["2rem", { lineHeight: "1.3", letterSpacing: "-0.03em" }],
        h5: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.03em" }],
        h6: ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.03em" }],
        large: ["1.25rem", { lineHeight: "1.5" }],
        medium: ["1.125rem", { lineHeight: "1.5" }],
        regular: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        tiny: ["0.75rem", { lineHeight: "1.5" }],
      },
      colors: {
        // Per-section colour scheme; values come from .scheme-1 / .scheme-2 in index.css.
        scheme: {
          background: "rgb(var(--scheme-background) / <alpha-value>)",
          "background-secondary": "rgb(var(--scheme-background-secondary) / <alpha-value>)",
          text: "rgb(var(--scheme-text) / <alpha-value>)",
          accent: "rgb(var(--scheme-accent) / <alpha-value>)",
          border: "rgb(var(--scheme-text) / 0.2)",
          foreground: "rgb(var(--scheme-background) / <alpha-value>)",
          "btn-text": "#ffffff",
        },
        brand: {
          ink: "#070707",
          paper: "#F5F5F5",
          rust: "#AA2C0D",
          steel: "#BCBDC8",
        },
        neutral: { darkest: "#070707" },
      },
      borderRadius: {
        button: "0rem", card: "0rem", image: "0rem", form: "0rem",
        badge: "0rem", checkbox: "0rem", carousel: "0rem", dropdown: "0rem",
      },
    },
  },
};
