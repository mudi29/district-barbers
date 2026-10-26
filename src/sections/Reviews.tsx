import { StarFull } from "relume-icons";
import { REVIEWS_URL } from "@/content";
import { cn } from "@/lib/utils";
import { t } from "@/i18n";

type Review = { quote: string; name: string };

const SOURCE = t.reviews.source;

const reviews: Review[] = [
  {
    quote:
      "Finally! After a year of searching Copenhagen, I have found my new barber 😁 My wife also says he did a really good job.",
    name: SOURCE,
  },
  { quote: "Clean place, good cut and great service.", name: SOURCE },
  { quote: "Super dygtige og kompetente barbers! Super tilfreds", name: SOURCE },
  { quote: "Fantastisk service og rigtig god barber!", name: SOURCE },
  {
    quote:
      "Sidst jeg var i københavn, så fik jeg klippet håret herinde, og der var servicen bare i top, samt klipningen. Det gik ikke for hurtigt men heller ikke for langsomt. Lige som det skulle være!",
    name: SOURCE,
  },
];

// Desktop shows these three side by side; phones and tablets get the moving row of all five.
const featured = reviews.slice(0, 3);

const COPIES = 4;

const ReviewCard = ({ review, className, hidden }: { review: Review; className?: string; hidden?: boolean }) => (
  <article
    aria-hidden={hidden}
    className={cn("flex flex-col gap-4 border border-brand-ink/30 bg-brand-paper p-6", className)}
  >
    <div className="flex gap-1" aria-label={t.reviews.stars}>
      {Array.from({ length: 5 }).map((_, s) => (
        <StarFull key={s} className="size-4 text-brand-ink" />
      ))}
    </div>
    <p className="flex-1 text-regular">{review.quote}</p>
    <p className="font-heading text-small font-semibold uppercase tracking-wider">{review.name}</p>
  </article>
);

const Ticker = ({ items }: { items: Review[] }) => (
  <div className="relative overflow-hidden">
    <div className="flex w-max gap-6 py-2" style={{ animation: "ticker 60s linear infinite" }}>
      {Array.from({ length: COPIES })
        .flatMap(() => items)
        .map((review, i) => (
          <ReviewCard
            key={i}
            review={review}
            hidden={i >= items.length}
            className="w-[320px] shrink-0 md:w-[380px]"
          />
        ))}
    </div>
  </div>
);

export const Reviews = () => (
  <section className="scheme-2 overflow-hidden bg-[#9C9DA6] pt-16 pb-20 md:pt-24 md:pb-[120px] lg:pt-20 lg:pb-[80px]">
    <div className="container mb-10 flex flex-col items-center gap-3 px-[5%] text-center md:mb-14">
      <div className="flex items-center gap-3">
        <div className="flex gap-1" aria-label={t.reviews.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarFull key={i} className="size-5 text-brand-ink" />
          ))}
        </div>
        <img src="/google-icon.svg" alt="Google" className="size-5" />
      </div>
      <h2 className="text-h2">{t.reviews.heading}</h2>
      <p className="text-regular text-scheme-text/80">{t.reviews.subtitle}</p>
    </div>

    <div className="lg:hidden">
      <Ticker items={reviews} />
    </div>

    <div className="hidden lg:mx-auto lg:grid lg:max-w-[960px] lg:grid-cols-3 lg:gap-6">
      {featured.map((review) => (
        <ReviewCard key={review.quote} review={review} />
      ))}
    </div>

    <div className="container mt-8 px-[5%] text-center">
      <a
        href={REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className="font-body text-small underline underline-offset-4 hover:no-underline"
      >
        {t.reviews.all}
      </a>
    </div>

    <style>{`
      @keyframes ticker {
        from { transform: translateX(0); }
        to   { transform: translateX(-25%); }
      }
    `}</style>
  </section>
);
