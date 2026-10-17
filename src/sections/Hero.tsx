import { Button } from "@/components/ui/button";

// Based on Relume Header 5: full-viewport backdrop media with a centred heading and CTA.
// The Relume draft has an empty video slot here; the shop photo stands in until a video is ready.
export const Hero = () => (
  <section id="top" className="relative flex min-h-svh items-center justify-center px-[5%] py-16 text-white">
    <div className="relative z-10 flex flex-col items-center gap-8 text-center">
      <Button asChild variant="secondary-alt" className="text-regular">
        <a href="#barbers">Enter District</a>
      </Button>
    </div>
    <div className="absolute inset-0 z-0">
      <video
        src="/heroVideo.MP4"
        autoPlay
        muted
        loop
        playsInline
        poster="/about.jpg"
        className="size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  </section>
);
