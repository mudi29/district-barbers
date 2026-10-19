import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ProgressBar } from "@/components/ui/progress-bar";
import { BOOKING_URL } from "@/content";
import { SectionHeader } from "./SectionHeader";

type Barber = {
  name: string;
  specialties: string;
  description: string;
  photo: string;
  bars: string[];
};

const barbers: Barber[] = [
  {
    name: "Mahdi",
    specialties: "fades · skæg · afros",
    description: "specialist i fades og skæg. jeg bruger tiden det tager.",
    photo: "/mahdi.png",
    bars: ["Fade", "Skæg", "Good vibes"],
  },
  {
    name: "Storm",
    specialties: "lige hår · styling · dansk hårtype",
    description: "specialist i taper, blondt og dansk hår.",
    photo: "/mahdi.png",
    bars: ["Hårklip", "Taper", "Energy LVL"],
  },
];

// One SVG filter reused by every card's stroke + ghost layers.
const BarberStrokeFilter = () => (
  <svg width="0" height="0" aria-hidden focusable="false" className="absolute">
    <filter id="barberStroke" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
      <feMorphology in="SourceAlpha" operator="dilate" radius="12" result="fat" />
      <feFlood floodColor="#AA2C0D" result="col" />
      <feComposite in="col" in2="fat" operator="in" />
    </filter>
  </svg>
);

const BarberPortrait = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative -mx-6 -mt-6 aspect-[4/5] w-auto">
    <div className="barber-figure">
      <div
        className="stroke-mask"
        style={{
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
        }}
      />
      <img className="ghost g1" src={src} alt="" />
      <img className="ghost g2" src={src} alt="" />
      <img className="ghost g3" src={src} alt="" />
      <img className="photo" src={src} alt={alt} />
    </div>
  </div>
);

// Based on Relume Team 9: header, card slider with controls, and a closing call to action.
export const Barbers = () => {
  const [selected, setSelected] = useState<string>(barbers[0].name);
  const [api, setApi] = useState<CarouselApi>();

  const selectBarber = (name: string, index: number) => {
    setSelected(name);
    api?.scrollTo(index);
  };


  return (
    <section id="barbers" className="scheme-1 overflow-hidden bg-[#E8E8E8] px-[5%] py-16 md:py-24 lg:py-28">
      <BarberStrokeFilter />
      <div className="container">
        <SectionHeader
          heading="Vælg din barber"
          description="to barberer, to specialer. hver klipning handler 100% om dig. vi lytter, klipper, og retter indtil det sidder som det skal."
        />
        <Carousel opts={{ align: "start" }} setApi={setApi}>
          <CarouselContent className="ml-0">
            {barbers.map((barber, index) => {
              const isSelected = barber.name === selected;
              return (
                <CarouselItem key={barber.name} className="basis-[90%] pl-0 pr-6 md:pr-8">
                  <button
                    type="button"
                    onClick={() => selectBarber(barber.name, index)}
                    className={cn(
                      "barber-card flex h-full w-full flex-col gap-6 border bg-brand-paper p-6 text-left transition-colors",
                      isSelected
                        ? "is-selected border-2 border-brand-rust"
                        : "border-brand-rust/30 hover:border-brand-rust/60",
                    )}
                    aria-pressed={isSelected}
                  >
                    <BarberPortrait src={barber.photo} alt={barber.name} />
                    <h3 className="text-h5">{barber.name}</h3>
                    <p className="flex-1">{barber.description}</p>
                    <div className="flex flex-col gap-3">
                      {barber.bars.map((label) => (
                        <ProgressBar key={label} label={label} value={100} />
                      ))}
                    </div>
                    <Button asChild className="w-full uppercase">
                      <a href={BOOKING_URL}>Book {barber.name}</a>
                    </Button>
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="mt-14 border border-brand-rust/30 bg-brand-paper p-8 md:mt-20 md:p-12">
          <h3 className="mb-3 text-h4 md:mb-4">Kan du ikke vælge?</h3>
          <p className="text-medium">tag næste ledige tid, så sætter vi dig på den stol der er fri.</p>
          <div className="mt-6 md:mt-8">
            <Button asChild>
              <a href={BOOKING_URL}>Book nu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
