import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/content";


export const About = () => (
  <section id="about" className="scheme-2 bg-[#9C9DA6] px-[5%] py-16 md:py-24 lg:py-28">
    <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
      <div>
        <h2 className="mb-5 text-h2 md:mb-6">Where style becomes identity</h2>
        <p className="mb-4 text-medium">
          district barbers is two barbers in nordvest. the same barber cuts you each time, so he learns your head
          instead of asking what you had last time.
        </p>
        <p className="mb-6 text-medium">
          every cut starts with a consultation, so the shape gets decided before anything is cut.
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
          Follow {INSTAGRAM_HANDLE} ↗
        </a>
      </div>
    </div>
  </section>
);
