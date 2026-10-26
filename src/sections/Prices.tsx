import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/content";
import { t } from "@/i18n";
import { SectionHeader } from "./SectionHeader";

const layout = [
  { price: 250, order: "lg:order-1" },
  { price: 150, order: "lg:order-3" },
  { price: 350, order: "lg:order-2" },
];
const services = layout.map((l, i) => ({ ...l, ...t.prices.services[i] }));

// Based on Relume Pricing 40: three plan cards.
export const Prices = () => (
  <section id="prices" className="scheme-1 bg-[#E8E8E8] px-[5%] pt-16 pb-20 md:pt-24 md:pb-[120px] lg:pt-20 lg:pb-[80px]">
    <div className="container lg:mx-auto lg:max-w-[960px]">
      <SectionHeader
        heading={t.prices.heading}
        description={t.prices.description}
        className="mb-8 md:mb-8 lg:mb-8"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-2">
        {services.map((s) => (
          <div key={s.name} className={`flex flex-col border border-scheme-border bg-brand-paper p-6 ${s.order}`}>
            <h3 className="text-h5">{s.name}</h3>
            <p className="mt-2 flex-1">{s.description}</p>
            <p className="mt-4 flex items-baseline gap-2 lg:flex-col lg:items-start lg:gap-0">
              <span className="font-heading text-h2 font-semibold">{s.price}</span>
              <span className="text-regular">DKK</span>
            </p>
          </div>
        ))}
        <div className="mt-2 border border-brand-ink/30 bg-brand-paper p-6 md:col-span-3 md:mt-14 lg:order-4 lg:col-span-1 lg:mt-0">
          <h3 className="mb-2 text-h4">{t.prices.readyHeading}</h3>
          <p className="text-regular">{t.prices.readyText}</p>
          <div className="mt-8">
            <Button asChild variant="secondary" className="w-full border-brand-ink">
              <a href={BOOKING_URL} data-umami-event="book-click" data-umami-event-source="prices">
                {t.barbers.bookNow}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
