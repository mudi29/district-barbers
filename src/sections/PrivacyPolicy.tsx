import {
  ADDRESS,
  CVR,
  NORDBOOQ_PRIVACY_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRIVACY_EMAIL,
} from "@/content";

const link = "underline underline-offset-4 hover:no-underline";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="flex flex-col gap-2">
    <h2 className="text-h5">{title}</h2>
    {children}
  </section>
);

type Processing = { title: string; data: string; purpose: string; basis: string; retention: string };

const processing: Processing[] = [
  {
    title: "Booking",
    data: "Det, du angiver ved booking, typisk navn, telefonnummer og e-mail, samt valgt tid og barber.",
    purpose: "At gennemføre og bekræfte din aftale, herunder sms-bekræftelse.",
    basis: "Aftale (GDPR art. 6, stk. 1, litra b).",
    retention: "2 år efter dit seneste besøg.",
  },
  {
    title: "Depositum og betaling",
    data: "Dine betalingsoplysninger og bilag for depositum. Betalingen gennemføres via Stripe.",
    purpose: "At gennemføre betalingen og føre regnskab.",
    basis: "Aftale (litra b) og retlig forpligtelse (litra c) efter bogføringsloven.",
    retention: "5 år efter udgangen af det regnskabsår, bilaget hører til.",
  },
  {
    title: "Markedsføring på sms (kun hvis du har sagt ja)",
    data: "Navn, telefonnummer og dit samtykke, herunder hvornår du gav det og en eventuel afmelding.",
    purpose: "At sende dig tilbud og nyheder på sms.",
    basis: "Samtykke (litra a) og markedsføringsloven.",
    retention: "Så længe du er tilmeldt. Efter afmelding gemmer vi samtykke og afmelding i op til 2 år som dokumentation.",
  },
  {
    title: "Henvendelser",
    data: "Det, du skriver eller siger, når du kontakter os på telefon eller e-mail.",
    purpose: "At besvare din henvendelse. Vores interesse er at kunne hjælpe dig.",
    basis: "Legitim interesse (litra f).",
    retention: "12 måneder efter, at sagen er afsluttet.",
  },
  {
    title: "Statistik over hjemmesiden",
    data: "Sider du ser, hvor du kommer fra, type af enhed og omtrentligt land. Ingen cookies.",
    purpose: "At forstå, hvordan hjemmesiden bruges, så vi kan forbedre den.",
    basis: "Legitim interesse (litra f).",
    retention: "Så længe vi bruger statistiktjenesten.",
  },
  {
    title: "Tekniske logs",
    data: "IP-adresse og tidspunkt for dit besøg.",
    purpose: "Drift og sikkerhed hos hostingudbyderen.",
    basis: "Legitim interesse (litra f).",
    retention: "Efter hostingudbyderens almindelige logrutiner.",
  },
];

const Line = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <p>
    <span className="text-scheme-text/70">{label}:</span> {children}
  </p>
);

export const PrivacyPolicy = () => (
  <main className="scheme-1 min-h-svh px-[5%] pt-16 pb-20 md:pt-24 md:pb-[120px]">
    <div className="container max-w-3xl">
      <a href="/" className={`${link} mb-8 inline-block font-body text-small`}>
        ← Tilbage til forsiden
      </a>
      <h1 className="mb-2 text-h2">Privatlivspolitik</h1>
      <p className="mb-12 text-small text-scheme-text/70">Sidst opdateret: 25. oktober 2026</p>

      <div className="flex flex-col gap-8">
        <Block title="Dataansvarlig">
          <p>
            District Barbers, CVR-nr. {CVR}
            <br />
            {ADDRESS}
            <br />
            Telefon:{" "}
            <a href={PHONE_HREF} className={link}>
              {PHONE_DISPLAY}
            </a>
            <br />
            E-mail:{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`} className={link}>
              {PRIVACY_EMAIL}
            </a>
          </p>
        </Block>

        <Block title="Hvad vi behandler, hvorfor og hvor længe">
          <div className="flex flex-col gap-6">
            {processing.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <h3 className="text-regular">{item.title}</h3>
                <Line label="Oplysninger">{item.data}</Line>
                <Line label="Formål">{item.purpose}</Line>
                <Line label="Grundlag">{item.basis}</Line>
                <Line label="Opbevaring">{item.retention}</Line>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Modtagere">
          <ul className="flex list-disc flex-col gap-2 pl-6">
            <li>
              Nordbooq, vores bookingsystem og databehandler, til booking, sms og e-mails. Data opbevares i EU. Se{" "}
              <a href={NORDBOOQ_PRIVACY_URL} target="_blank" rel="noreferrer" className={link}>
                Nordbooqs privatlivspolitik
              </a>
              .
            </li>
            <li>
              Stripe, til betaling af depositum. Se{" "}
              <a href="https://stripe.com/privacy" target="_blank" rel="noreferrer" className={link}>
                Stripes privatlivspolitik
              </a>
              .
            </li>
            <li>Simply.com, som hoster hjemmesiden.</li>
            <li>Umami, til statistik. Data lagres i EU.</li>
            <li>Google, som leverer skrifttyperne og modtager din IP-adresse, når siden åbnes.</li>
          </ul>
        </Block>

        <Block title="Overførsel uden for EU">
          <p>
            Umami og Stripe har amerikanske moderselskaber, og Google kan overføre din IP-adresse til USA. Overførsler sker
            på grundlag af EU's standardkontraktbestemmelser eller et andet gyldigt overførselsgrundlag.
          </p>
        </Block>

        <Block title="Er det frivilligt?">
          <p>
            Du er ikke forpligtet til at give os oplysninger, men uden navn og telefonnummer kan vi ikke gennemføre en
            booking. Samtykke til sms-markedsføring er frivilligt og kan trækkes tilbage når som helst.
          </p>
        </Block>

        <Block title="Dine rettigheder">
          <p>
            Du har ret til indsigt, berigtigelse, sletning, begrænsning, indsigelse og dataportabilitet, og til at trække
            et samtykke tilbage. Skriv til{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`} className={link}>
              {PRIVACY_EMAIL}
            </a>
            . Du kan klage til{" "}
            <a href="https://www.datatilsynet.dk" target="_blank" rel="noreferrer" className={link}>
              Datatilsynet
            </a>
            .
          </p>
        </Block>
      </div>
    </div>
  </main>
);
