import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  skills: { fade: number; beard: number; goodVibes: number };
};

const barbers: Barber[] = [
  {
    name: "Mahdi",
    specialties: "fades · beards · afros",
    description: "fades that hold their shape, and beards cut for the face they're on.",
    photo: "/mahdi.png",
    skills: { fade: 100, beard: 100, goodVibes: 100 },
  },
  {
    name: "Storm",
    specialties: "straight hair · styling · danish hair types",
    description: "straight hair worked with properly: length, weight, and how it falls as it grows out.",
    photo: "/mahdi.png",
    skills: { fade: 100, beard: 100, goodVibes: 100 },
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
          heading="Choose your barber"
          description="two barbers, two specialities. every cut starts with a consultation, so you and your barber agree on the shape before anything gets cut."
        />
        <Carousel opts={{ align: "start" }} setApi={setApi}>
          <CarouselContent className="ml-0">
            {barbers.map((barber, index) => {
              const isSelected = barber.name === selected;
              return (
                <CarouselItem key={barber.name} className="basis-4/5 pl-0 pr-6 md:pr-8">
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
                      <ProgressBar label="Fade" value={100} />
                      <ProgressBar label="Beard" value={100} />
                      <ProgressBar label="Good vibes" value={100} />
                    </div>
                    <Button asChild className="w-full uppercase">
                      <a href={BOOKING_URL}>Vælg {barber.name}</a>
                    </Button>
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="mt-10 flex justify-end gap-2 md:hidden">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
        <div className="mt-14 border border-brand-rust/30 bg-brand-paper p-8 md:mt-20 md:p-12">
          <h3 className="mb-3 text-h4 md:mb-4">No preference?</h3>
          <p className="text-medium">take the next available time and we'll put you with whoever is free.</p>
          <div className="mt-6 md:mt-8">
            <Button asChild>
              <a href={BOOKING_URL}>Book Next Available</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
