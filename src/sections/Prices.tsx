import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/content";
import { SectionHeader } from "./SectionHeader";

const services = [
  { name: "Haircut", description: "cut to your hair and your head, from clipper work up to scissor length.", price: 250 },
  { name: "Beard", description: "shaped, lined and trimmed, with the neck and cheek lines cleaned up.", price: 150 },
  { name: "Hair and beard", description: "both, in one appointment. the way most people book.", price: 350 },
];

// Based on Relume Pricing 40: three plan cards, followed by a CTA banner.
export const Prices = () => (
  <section id="prices" className="scheme-1 bg-[#E8E8E8] px-[5%] py-16 md:py-24 lg:py-28">
    <div className="container">
      <SectionHeader
        heading="Prices"
        description="the consultation is part of every appointment, not an add-on. booking takes a 50% deposit to hold the time."
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
          <h3 className="text-h4">Ready when you are.</h3>
          <p className="mt-3 text-medium">pick a barber above, or take the next available chair.</p>
        </div>
        <Button asChild>
          <a href={BOOKING_URL}>Book An Appointment</a>
        </Button>
      </div>
    </div>
  </section>
);
