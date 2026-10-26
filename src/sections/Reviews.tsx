import { StarFull } from "relume-icons";
import { REVIEWS_URL } from "@/content";
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

// Three reviews: stacked on phones and tablets, side by side on desktop.
const featured = reviews.slice(0, 3);

const ReviewCard = ({ review }: { review: Review }) => (
  <article className="flex flex-col gap-4 border border-brand-ink/30 bg-brand-paper p-6">
    <div className="flex gap-1" aria-label={t.reviews.stars}>
      {Array.from({ length: 5 }).map((_, s) => (
        <StarFull key={s} className="size-4 text-brand-ink" />
      ))}
    </div>
    <p className="flex-1 text-regular">{review.quote}</p>
    <p className="font-heading text-small font-semibold uppercase tracking-wider">{review.name}</p>
  </article>
);

export const Reviews = () => (
  <section id="reviews" className="scheme-2 overflow-hidden bg-[#9C9DA6] pt-16 pb-20 md:pt-24 md:pb-[120px] lg:pt-16 lg:pb-[80px]">
    <div className="px-[5%]">
    <div className="container mb-12 flex flex-col items-start gap-2 md:mb-18 lg:mx-auto lg:mb-8 lg:max-w-[960px]">
      <h2 className="text-h2">{t.reviews.heading}</h2>
    </div>
    </div>

    <div className="px-[5%]">
      <div className="container grid grid-cols-1 gap-6 lg:mx-auto lg:max-w-[960px] lg:grid-cols-3">
        {featured.map((review) => (
          <ReviewCard key={review.quote} review={review} />
        ))}
      </div>
    </div>

    <div className="px-[5%]">
    <div className="container mt-8 lg:mx-auto lg:mt-6 lg:max-w-[960px]">
      <a
        href={REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className="font-body text-medium font-medium underline decoration-2 underline-offset-4 hover:no-underline"
      >
        {t.reviews.all}
      </a>
    </div>
    </div>
  </section>
);
