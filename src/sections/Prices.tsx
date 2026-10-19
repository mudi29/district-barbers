import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/content";
import { SectionHeader } from "./SectionHeader";

const services = [
  { name: "Klip", description: "klippet til dit hår og dit hoved, fra clipper-arbejde op til sakselængde.", price: 250 },
  { name: "Skæg", description: "formet, lined og trimmet, med hals og kinder renset op.", price: 150 },
  { name: "Klip + skæg", description: "begge dele, samme tid. 45 minutter i samme stol.", price: 350 },
];

// Based on Relume Pricing 40: three plan cards, followed by a CTA banner.
export const Prices = () => (
  <section id="prices" className="scheme-1 bg-[#E8E8E8] px-[5%] py-16 md:py-24 lg:py-28">
    <div className="container">
      <SectionHeader
        heading="Priser"
        description="konsultationen er del af hver tid, ikke et tillæg. booking kræver 50% depositum for at holde tiden."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.name} className="flex flex-col border border-scheme-border bg-brand-paper p-8">
            <h3 className="text-h5">{s.name}</h3>
            <p className="mt-3 flex-1">{s.description}</p>
            <p className="mt-8 flex items-baseline gap-2">
              <span className="font-heading text-h2 font-semibold">{s.price}</span>
              <span className="text-medium">DKK</span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-6 bg-scheme-background-secondary p-8 md:mt-20 md:flex-row md:items-center md:p-12">
        <div>
          <h3 className="text-h4">Når du er klar.</h3>
          <p className="mt-3 text-medium">vælg en barber ovenfor, eller tag næste ledige stol.</p>
        </div>
        <Button asChild>
          <a href={BOOKING_URL}>Book en tid</a>
        </Button>
      </div>
    </div>
  </section>
);
