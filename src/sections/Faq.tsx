import { useState } from "react";
import { cn } from "@/lib/utils";
import { t } from "@/i18n";
import { SectionHeader } from "./SectionHeader";

const faqs = t.faq.items;

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scheme-1 px-[5%] pt-16 pb-20 md:pt-24 md:pb-[120px] lg:pt-20 lg:pb-[80px]">
      <div className="container max-w-3xl lg:mx-auto lg:max-w-[960px]">
        <SectionHeader heading={t.faq.heading} description={t.faq.description} />
        <div className="flex flex-col">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "border-t transition-colors last:border-b",
                  isOpen ? "border-scheme-text" : "border-scheme-border",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={cn(
                      "font-heading text-h6 text-scheme-text",
                      isOpen ? "font-semibold" : "font-medium",
                    )}
                  >
                    {item.q}
                  </span>
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
                    <p className="pb-6 pr-10 text-scheme-text/90">{item.a}</p>
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
