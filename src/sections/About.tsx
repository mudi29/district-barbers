import { INSTAGRAM_URL, TIKTOK_URL } from "@/content";
import { t } from "@/i18n";

const followLink = "font-body text-small underline underline-offset-4 hover:no-underline";

export const About = () => (
  <section id="about" className="scheme-2 bg-[#9C9DA6] px-[5%] pt-16 pb-20 md:pt-24 md:pb-[120px] lg:pt-20 lg:pb-[80px]">
    <div className="container grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_360px] md:gap-8 lg:mx-auto lg:max-w-[960px] lg:gap-12">
      <div>
        <h2 className="mb-5 text-h2 md:mb-6">{t.about.heading}</h2>
        <p className="mb-4 text-medium">
          {t.about.lead}
        </p>
        <p className="mb-8 text-regular">
          {t.about.second}
        </p>
        <ul className="flex flex-col border-b border-brand-ink/30">
          {t.about.facts.map((fact) => (
            <li key={fact.title} className="border-t border-brand-ink/30 py-4">
              <h3 className="text-regular font-semibold">{fact.title}</h3>
              <p className="mt-1 text-regular">{fact.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex w-full max-w-[360px] flex-col gap-4 md:mx-0">
        <video
          src="/storm.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="aspect-[9/16] w-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="font-heading text-h6 font-semibold uppercase">{t.about.follow}</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={followLink}>
            Instagram
          </a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className={followLink}>
            TikTok
          </a>
        </div>
      </div>
    </div>
  </section>
);
