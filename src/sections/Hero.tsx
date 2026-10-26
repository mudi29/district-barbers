import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/lazy-video";
import { t } from "@/i18n";

// Based on Relume Header 5: full-viewport backdrop media with a centred heading and CTA.
// The Relume draft has an empty video slot here; the shop photo stands in until a video is ready.
export const Hero = () => (
  <section id="top" className="relative flex min-h-svh items-center justify-center px-[5%] py-16 text-white">
    <div className="relative z-10 flex flex-col items-center gap-8 text-center">
      <h1 className="sr-only">{t.hero.h1}</h1>
      <Button asChild variant="secondary-alt" className="text-regular">
        <a href="#barbers">{t.hero.cta}</a>
      </Button>
    </div>
    <div className="absolute inset-0 z-0 bg-brand-ink lg:flex lg:justify-center">
      <LazyVideo
        src="/hero.mp4"
        poster="/hero-poster.webp"
        autoPlay
        preload="auto"
        aria-hidden
        className="size-full object-cover lg:aspect-[9/16] lg:h-full lg:w-auto"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  </section>
);
