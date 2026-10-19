import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/content";


export const About = () => (
  <section id="about" className="scheme-2 bg-[#9C9DA6] px-[5%] py-16 md:py-24 lg:py-28">
    <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
      <div>
        <h2 className="mb-5 text-h2 md:mb-6">Vi lærer dit hoved at kende.</h2>
        <p className="mb-4 text-medium">
          district barbers er to barberer i nordvest. den samme barber klipper dig hver gang, så han kender dit
          hoved i stedet for at spørge hvad du havde sidst.
        </p>
        <p className="mb-6 text-medium">
          hver klipning starter med en konsultation. formen bliver besluttet før der klippes.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[360px] flex-col gap-4">
        <video
          src="/storm.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="aspect-[9/16] w-full object-cover"
        />
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="font-heading text-small font-semibold uppercase tracking-wider hover:underline hover:underline-offset-4"
        >
          Følg {INSTAGRAM_HANDLE} ↗
        </a>
      </div>
    </div>
  </section>
);
