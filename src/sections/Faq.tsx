import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Do you take walk-ins?",
    a: "yes, when a chair is free. booking holds a specific time, and you'll get an sms to confirm it.",
  },
  {
    q: "Do I need to pay a deposit?",
    a: "booking takes a 50% deposit to hold the time. the rest is paid at the shop.",
  },
  {
    q: "What's your cancellation policy?",
    a: "cancel up to an hour before your appointment and the deposit is refunded in full.",
  },
  {
    q: "Do you speak English?",
    a: "yes. danish and english, both barbers.",
  },
  {
    q: "How long does a cut take?",
    a: "a haircut is around 30 minutes. cut and beard together is around 45. the first time usually takes a bit longer because of the consultation.",
  },
  {
    q: "Can I bring a reference photo?",
    a: "please do. a picture is faster than describing it, and your barber will tell you honestly whether it'll work on your hair.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scheme-1 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-3xl">
        <SectionHeader heading="FAQ" description="the questions we get most often, answered." />
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
