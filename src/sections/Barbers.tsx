import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "@/content";
import { t } from "@/i18n";
import { SectionHeader } from "./SectionHeader";

type Barber = {
  name: string;
  photo: string;
  outline: string;
};

const barbers: Barber[] = [
  {
    name: "Mahdi",
    photo: "/barber-mahdi.webp",
    outline: "/barber-mahdi-outline.webp",
  },
  {
    name: "Storm",
    photo: "/barber-storm.webp",
    outline: "/barber-storm-outline.webp",
  },
];

// A full bar, drawn with plain elements so a phone has nothing to animate or track.
const StatBar = ({ label }: { label: string }) => (
  <div role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={100}>
    <div className="flex items-baseline justify-between gap-3 text-tiny font-medium uppercase text-scheme-text lg:text-regular">
      <span className="truncate">{label}</span>
      <span aria-hidden className="shrink-0 text-scheme-text/60">100%</span>
    </div>
    <div className="mt-2 h-3 w-full border border-scheme-text/20">
      <div className="h-full w-full bg-black/50" />
    </div>
  </div>
);

// The selected card shows a copy of the photo with the ink outline already drawn into it. Fading between
// the two is cheap, where a live drop-shadow filter made phones in Low Power Mode stutter.
const BarberPortrait = ({ src, outline, alt }: { src: string; outline: string; alt: string }) => (
  <div className="relative -mx-6 -mt-6 aspect-[4/5] w-auto lg:aspect-[24/25]">
    <div className="barber-figure">
      <img src={src} alt={alt} decoding="async" />
      <img src={outline} alt="" aria-hidden decoding="async" className="barber-outline" />
    </div>
  </div>
);

// Based on Relume Team 9: header, card slider with controls, and a closing call to action.
export const Barbers = () => {
  const [selected, setSelected] = useState<string>(barbers[0].name);
  const [api, setApi] = useState<CarouselApi>();

  const selectBarber = (name: string, index: number) => {
    setSelected(name);
    if (window.matchMedia("(max-width: 1023px)").matches) api?.scrollTo(index);
  };

  // Decode every portrait up front. Phones skip images that are off screen or fully transparent and decode
  // them the moment they appear, which shows up as a hitch right when a card is selected.
  useEffect(() => {
    document.querySelectorAll<HTMLImageElement>(".barber-figure img").forEach((img) => {
      img.decode?.().catch(() => {});
    });
  }, []);

  // Keep the "selected" (outlined) card in sync with whichever card the
  // carousel is currently on — so a swipe outlines the new in-view card.
  useEffect(() => {
    if (!api) return;
    const sync = () => {
      const i = api.selectedScrollSnap();
      const name = barbers[i]?.name;
      if (name) setSelected(name);
    };
    api.on("select", sync);
    sync();
    return () => {
      api.off("select", sync);
    };
  }, [api]);


  return (
    <section id="barbers" className="scheme-1 overflow-hidden bg-[#E8E8E8] px-[5%] pt-16 pb-20 md:pt-24 md:pb-[120px] lg:pt-16 lg:pb-[80px]">
      <div className="container lg:mx-auto lg:max-w-[752px]">
        <SectionHeader
          heading={t.barbers.heading}
          description={t.barbers.description}
        />
        <Carousel opts={{ align: "start", breakpoints: { "(min-width: 1024px)": { active: false } } }} setApi={setApi}>
          <CarouselContent className="ml-0 lg:-ml-4">
            {barbers.map((barber, index) => {
              const isSelected = barber.name === selected;
              return (
                <CarouselItem key={barber.name} className="basis-[90%] pl-0 pr-6 sm:basis-[60%] lg:basis-[392px] lg:px-4">
                  <div
                    onClick={() => selectBarber(barber.name, index)}
                    className={cn(
                      "barber-card flex h-full w-full flex-col overflow-hidden border-2 bg-brand-paper p-6 text-left",
                      isSelected
                        ? "is-selected border-brand-ink"
                        : "border-brand-ink/30 hover:border-brand-ink/60",
                    )}
                  >
                    <BarberPortrait src={barber.photo} outline={barber.outline} alt={t.barbers.alt(barber.name)} />
                    <h3 className="mt-8 text-h5">
                      <button type="button" aria-pressed={isSelected} className="text-left uppercase">
                        {barber.name}
                      </button>
                    </h3>
                    <p className="mt-2 flex-1">{t.barbers.list[index].description}</p>
                    <div className="mt-8 flex flex-col gap-2">
                      {t.barbers.list[index].bars.map((label) => (
                        <StatBar key={label} label={label} />
                      ))}
                    </div>
                    <Button asChild className="mt-8 w-full uppercase">
                      <a
                        href={BOOKING_URL}
                        data-umami-event="book-click"
                        data-umami-event-source={`barber-${barber.name}`}
                      >
                        {t.barbers.choose(barber.name)}
                      </a>
                    </Button>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 border border-brand-ink/30 bg-brand-paper p-6 lg:max-w-[360px]">
          <h3 className="mb-2 text-h4">{t.barbers.undecidedHeading}</h3>
          <p className="text-regular">{t.barbers.undecidedText}</p>
          <div className="mt-8 md:mt-8">
            <Button asChild variant="secondary" className="w-full border-brand-ink">
              <a href={BOOKING_URL} data-umami-event="book-click" data-umami-event-source="no-preference">
                {t.barbers.bookNow}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
