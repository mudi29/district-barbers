import {
  ADDRESS,
  BOOKING_URL,
  NORDBOOQ_COOKIE_URL,
  NORDBOOQ_PRIVACY_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  UMAMI_WEBSITE_ID,
} from "@/content";

const hasAnalytics = Boolean(UMAMI_WEBSITE_ID);
const hasBooking = BOOKING_URL.startsWith("http");

const link = "underline underline-offset-4 hover:no-underline";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="flex flex-col gap-2">
    <h2 className="text-h5">{title}</h2>
    {children}
  </section>
);

export const CookiePolicy = () => (
  <main className="scheme-1 min-h-svh px-[5%] pt-16 pb-20 md:pt-24 md:pb-[120px]">
    <div className="container max-w-3xl">
      <a href="/" className={`${link} mb-8 inline-block font-body text-small`}>
        ← Tilbage til forsiden
      </a>
      <h1 className="mb-2 text-h2">Cookiepolitik</h1>
      <p className="mb-12 text-small text-scheme-text/70">Sidst opdateret: 25. oktober 2026</p>

      <div className="flex flex-col gap-8">
        <Block title="Kort fortalt">
          <p>
            Denne hjemmeside sætter ingen cookies på din enhed.{" "}
            {hasAnalytics
              ? "Vi bruger en anonym statistiktjeneste uden cookies, men ingen markedsføring eller sporing på tværs af sider, og derfor har vi heller ikke et cookiebanner."
              : "Vi bruger ikke statistik, markedsføring eller sporing, og derfor har vi heller ikke et cookiebanner."}
          </p>
        </Block>

        <Block title="Hvad er cookies?">
          <p>
            Cookies er små tekstfiler, som en hjemmeside gemmer i din browser. De bruges blandt andet til at huske
            indstillinger, måle trafik eller vise målrettede annoncer.
          </p>
        </Block>

        <Block title="Hvad bruger vi?">
          <p>
            Ingen cookies. Siden gemmer heller ikke data i din browsers lokale lager (localStorage eller
            sessionStorage).
          </p>
        </Block>

        <Block title="Eksterne tjenester">
          <p>
            Selvom vi ikke sætter cookies, henter siden {hasAnalytics ? "to ting" : "én ting"} fra{" "}
            {hasAnalytics ? "eksterne servere" : "en ekstern server"}, når du åbner den. Her modtager{" "}
            {hasAnalytics ? "tjenesterne" : "tjenesten"} din IP-adresse og almindelige browseroplysninger:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-6">
            <li>
              <strong className="font-semibold">Google Fonts</strong> (fonts.googleapis.com og fonts.gstatic.com):
              skrifttyperne Work Sans og JetBrains Mono.
            </li>
            {hasAnalytics && (
              <li>
                <strong className="font-semibold">Umami</strong> (statistik): tæller sidevisninger og klik på
                booking-knapperne uden cookies. Umami modtager din IP-adresse og dine browseroplysninger, når siden
                åbnes, og bruger dem til at tælle besøg og vise et omtrentligt land. Data lagres på servere i EU. Læs
                mere i Umamis egen privatlivspolitik.
              </li>
            )}
          </ul>
          <p>Vi sætter selv ingen cookies i forbindelse med {hasAnalytics ? "de eksterne tjenester" : "den eksterne tjeneste"}.</p>
        </Block>

        <Block title="Hosting">
          <p>
            Siden hostes hos Simply.com, som kan registrere tekniske oplysninger, fx IP-adresse og tidspunkt, af
            hensyn til drift og sikkerhed.
          </p>
        </Block>

        <Block title="Links til andre sider">
          <p>
            Vi linker til blandt andet Instagram og TikTok. Når du klikker på et link, forlader du vores side, og
            den pågældende tjeneste har sin egen cookie- og privatlivspolitik.
          </p>
          {hasBooking && (
            <p>
              Du booker tid hos vores bookingsystem Nordbooq, som du kommer til via vores booking-knapper. Nordbooq
              sætter blandt andet en nødvendig cookie, der husker din booking, og en login-cookie i op til 30 dage,
              hvis du logger ind. Hvis der vises et kort, kan Google sætte cookies, og når du betaler depositum, kan
              betalingsudbyderen Stripe sætte cookies for at forebygge svindel. Nordbooq har sin egen{" "}
              <a href={NORDBOOQ_COOKIE_URL} target="_blank" rel="noreferrer" className={link}>
                cookiepolitik
              </a>{" "}
              og{" "}
              <a href={NORDBOOQ_PRIVACY_URL} target="_blank" rel="noreferrer" className={link}>
                privatlivspolitik
              </a>
              .
            </p>
          )}
        </Block>

        <Block title="Hvis det ændrer sig">
          <p>
            Hvis vi senere tilføjer fx annoncer eller andre værktøjer, der gemmer oplysninger på din enhed, kan der
            blive sat cookies. I så fald opdaterer vi denne side og beder om dit samtykke, før de sættes.
          </p>
        </Block>

        <Block title="Kontakt">
          <p>
            District Barbers
            <br />
            {ADDRESS}
            <br />
            Telefon:{" "}
            <a href={PHONE_HREF} className={link}>
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            Du kan altid klage til{" "}
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
