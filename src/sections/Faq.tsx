import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Tager I walk-ins?",
    a: "ja, når en stol er fri. en booking holder en bestemt tid, og du får en sms som bekræftelse.",
  },
  {
    q: "Skal jeg betale depositum?",
    a: "booking kræver 50% depositum for at holde tiden. resten betales i butikken.",
  },
  {
    q: "Hvad er jeres afbudsregler?",
    a: "afbud op til en time før din tid, så får du dit depositum fuldt refunderet.",
  },
  {
    q: "Taler I engelsk?",
    a: "ja. dansk og engelsk, begge barberer.",
  },
  {
    q: "Hvor lang tid tager en klipning?",
    a: "en klipning tager omkring 30 minutter. klip og skæg sammen er omkring 45. første gang tager typisk lidt længere på grund af konsultationen.",
  },
  {
    q: "Kan jeg tage et referencebillede med?",
    a: "ja tak. et billede er hurtigere end at beskrive det, og din barber siger ærligt hvorvidt det passer til dit hår.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scheme-1 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-3xl">
        <SectionHeader heading="FAQ" description="de spørgsmål vi får oftest, besvaret." />
        <div className="flex flex-col">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-t border-scheme-border last:border-b">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-h6">{item.q}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "shrink-0 text-h5 transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    <p className="pb-6 pr-10">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
