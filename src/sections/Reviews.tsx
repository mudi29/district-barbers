import { StarFull } from "relume-icons";

type Review = { quote: string; name: string };

const reviews: Review[] = [
  {
    quote: "Bedste fade jeg har fået i København. Mahdi tager sig tid og rammer det hver gang.",
    name: "Jonas B.",
  },
  {
    quote: "Super stemning i butikken. Fik præcis det jeg bad om, og de guidede mig fint.",
    name: "Emil R.",
  },
  {
    quote: "Been here five times now, never a bad cut. The guys know what they're doing.",
    name: "Oliver K.",
  },
  {
    quote: "Mit skæg er aldrig blevet trimmet så pænt. Rolig og professionel oplevelse.",
    name: "Mikkel S.",
  },
  {
    quote: "Great atmosphere, honest advice, and they actually listen before cutting.",
    name: "Daniel P.",
  },
  {
    quote: "Storm lavede min klipning perfekt — længden og formen holder helt vildt godt.",
    name: "Lucas H.",
  },
  {
    quote: "The best barbers in Nordvest. Clean shop, sharp cuts, friendly guys.",
    name: "Victor L.",
  },
  {
    quote: "Fik en skin fade og et beard trim — begge dele på topniveau. Kommer igen.",
    name: "Noah A.",
  },
];

const Ticker = ({ items, reverse = false }: { items: Review[]; reverse?: boolean }) => (
  <div className="relative overflow-hidden">
    <div
      className="flex w-max gap-6 py-2"
      style={{
        animation: `${reverse ? "ticker-reverse" : "ticker"} 60s linear infinite`,
      }}
    >
      {[...items, ...items].map((review, i) => (
        <article
          key={i}
          className="flex w-[320px] shrink-0 flex-col gap-4 border border-brand-rust/30 bg-brand-paper p-6 md:w-[380px]"
        >
          <div className="flex gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, s) => (
              <StarFull key={s} className="size-4 text-brand-rust" />
            ))}
          </div>
          <p className="flex-1 text-regular">{review.quote}</p>
          <p className="font-heading text-small font-semibold uppercase tracking-wider">
            {review.name}
          </p>
        </article>
      ))}
    </div>
  </div>
);

export const Reviews = () => (
  <section className="scheme-2 overflow-hidden bg-[#9C9DA6] py-16 md:py-24 lg:py-28">
    <div className="container mb-10 flex flex-col items-center gap-3 px-[5%] text-center md:mb-14">
      <div className="flex items-center gap-3">
        <div className="flex gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarFull key={i} className="size-5 text-brand-rust" />
          ))}
        </div>
        <img
          src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/6a89635e167fcf950ee07ee4_icon-google-no-bg-colour.svg"
          alt="Google"
          className="size-5"
        />
      </div>
      <h2 className="text-h2">Kun glade kunder</h2>
      <p className="text-medium text-scheme-text/70">
        district barbers · nordvest, københavn
      </p>
    </div>

    <Ticker items={reviews} />

    <style>{`
      @keyframes ticker {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes ticker-reverse {
        from { transform: translateX(-50%); }
        to   { transform: translateX(0); }
      }
    `}</style>
  </section>
);
