// Danish lives at "/", English at "/en". Switching language is a normal page load, so the language
// is fixed per page and `t` can be a plain object instead of React state.
export type Lang = "da" | "en";

export const lang: Lang = /^\/en(\/|$)/.test(window.location.pathname) ? "en" : "da";
document.documentElement.lang = lang;

const da = {
  title: "District Barbers | Barber i København NV: fade, klip og skæg",
  switchTo: { label: "English", href: "/en", code: "EN" },
  nav: [
    { title: "barbere", href: "#barbers" },
    { title: "priser", href: "#prices" },
    { title: "om", href: "#about" },
    { title: "faq", href: "#faq" },
    { title: "kontakt", href: "#contact" },
  ],
  bookCta: "Book en tid",
  openMenu: "Åbn menu",
  closeMenu: "Luk menu",
  hero: { cta: "Enter District" },
  barbers: {
    heading: "Vælg din barber",
    description:
      "To barbers, 2 specialer. Hver klipning handler 100% om dig. vi lytter, klipper, og retter indtil det sidder som det skal.",
    list: [
      { description: "Specialist i fades og skæg. Jeg bruger den tid det tager.", bars: ["Fade", "Skæg", "Good vibes"] },
      { description: "Specialist i taper, blondt og dansk hår.", bars: ["FADE", "TAPER", "ENERGY LVL"] },
    ],
    choose: (name: string) => `Vælg ${name}`,
    undecidedHeading: "Kan du ikke vælge?",
    undecidedText: "Tag næste ledige tid, så sætter vi dig på den stol der er fri.",
    bookNow: "BOOK NU",
  },
  reviews: {
    stars: "5 ud af 5 stjerner",
    source: "Google-anmeldelse",
    heading: "Kun glade kunder",
    subtitle: "district barbers · nordvest, københavn",
    all: "Se alle anmeldelser på Google",
  },
  prices: {
    heading: "Priser",
    description:
      "konsultationen er del af hver tid, ikke et tillæg. booking kræver 50% depositum for at holde tiden.",
    services: [
      { name: "Klip", description: "klippet til dit hår og dit hoved, fra clipper-arbejde op til sakselængde." },
      { name: "Skæg", description: "formet, lined og trimmet, med hals og kinder renset op." },
      { name: "Klip + skæg", description: "begge dele, samme tid. 45 minutter i samme stol." },
    ],
    readyHeading: "Klar når du er",
    readyText: "Tag næste ledige tid, så sætter vi dig på den stol der er fri.",
  },
  about: {
    heading: "Vi lærer dit hoved at kende.",
    lead:
      "District Barbers er to barberer i Nordvest. Den samme barber klipper dig hver gang, så han kender dit hoved i stedet for at spørge, hvad du havde sidst.",
    second: "Hver klipning starter med en konsultation. Formen bliver besluttet, før der klippes.",
    facts: [
      { title: "Walk-ins velkomne", text: "Når en stol er fri. Book, hvis du vil holde en bestemt tid." },
      { title: "Dansk og engelsk", text: "Begge barberer taler begge dele." },
      { title: "Tag et billede med", text: "Et billede er hurtigere end at beskrive det." },
    ],
    follow: "Følg os for mere",
  },
  faq: {
    heading: "FAQ",
    description: "De spørgsmål vi oftest får.",
    items: [
      {
        q: "Tager I walk-ins?",
        a: "Ja, når en stol er fri eller snart bliver fri. Hvis du booker holder du en bestemt tid, og du får en sms som bekræftelse.",
      },
      {
        q: "Hygiejne?",
        a: "Vi går meget op i hygiejne og renhed. Alle maskiner bliver rengjort og desinficeret inden hver kunde.",
      },
      {
        q: "Skal jeg betale depositum?",
        a: "Booking kræver 50% depositum for at holde tiden. Resten betales i butikken.",
      },
      {
        q: "Hvad er jeres afbudsregler?",
        a: "Afbud op til en time før din tid, så får du dit depositum fuldt refunderet.",
      },
      { q: "Taler I engelsk?", a: "Ja, dansk og engelsk, begge barberer." },
      {
        q: "Hvor lang tid tager en klipning?",
        a: "En klipning tager omkring 30 minutter. Klip og skæg tager sammenlagt omkring 45 minutter. Første gang tager typisk lidt længere på grund af konsultationen.",
      },
      {
        q: "Kan jeg tage et referencebillede med?",
        a: "Ja tak. Et billede er hurtigere end at beskrive det, og din barber siger ærligt hvorvidt det passer til dit hår.",
      },
    ],
  },
  footer: {
    tagline: "Where style becomes identity",
    pages: "Sider",
    contact: "Kontakt",
    hours: "Åbningstider",
    monday: "Mandag: lukket",
    openDays: "Tirsdag - søndag: 10-18",
    privacy: "privatlivspolitik",
    cookies: "cookiepolitik",
  },
};

const en: typeof da = {
  title: "District Barbers | Barber in Copenhagen NV: fades, haircuts and beards",
  switchTo: { label: "Dansk", href: "/", code: "DA" },
  nav: [
    { title: "barbers", href: "#barbers" },
    { title: "prices", href: "#prices" },
    { title: "about", href: "#about" },
    { title: "faq", href: "#faq" },
    { title: "contact", href: "#contact" },
  ],
  bookCta: "Book now",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  hero: { cta: "Enter District" },
  barbers: {
    heading: "Choose your barber",
    description:
      "Two barbers, two specialties. Every cut is 100% about you. We listen, cut, and adjust until it sits the way it should.",
    list: [
      { description: "Fades and beards specialist. I take the time it takes.", bars: ["Fade", "Beard", "Good vibes"] },
      { description: "Specialist in tapers, blond and Danish hair.", bars: ["FADE", "TAPER", "ENERGY LVL"] },
    ],
    choose: (name: string) => `Choose ${name}`,
    undecidedHeading: "Can't decide?",
    undecidedText: "Take the next available time and we'll put you in whichever chair is free.",
    bookNow: "BOOK NOW",
  },
  reviews: {
    stars: "5 out of 5 stars",
    source: "Google review",
    heading: "Only happy customers",
    subtitle: "district barbers · nordvest, copenhagen",
    all: "See all reviews on Google",
  },
  prices: {
    heading: "Prices",
    description:
      "The consultation is part of every appointment, not an extra. Booking requires a 50% deposit to hold your time.",
    services: [
      { name: "Haircut", description: "Cut for your hair and your head, from clipper work to scissor length." },
      { name: "Beard", description: "Shaped, lined and trimmed, with neck and cheeks cleaned up." },
      { name: "Haircut + beard", description: "Both, same visit. 45 minutes in the same chair." },
    ],
    readyHeading: "Ready when you are",
    readyText: "Take the next available time and we'll put you in whichever chair is free.",
  },
  about: {
    heading: "We get to know your head.",
    lead:
      "District Barbers is two barbers in Nordvest. The same barber cuts your hair every time, so he knows your head instead of asking what you had last time.",
    second: "Every haircut starts with a consultation. The shape is decided before the cutting starts.",
    facts: [
      { title: "Walk-ins welcome", text: "Whenever a chair is free. Book if you want to hold a specific time." },
      { title: "Danish and English", text: "Both barbers speak both." },
      { title: "Bring a photo", text: "A photo is quicker than describing it." },
    ],
    follow: "Follow us for more",
  },
  faq: {
    heading: "FAQ",
    description: "The questions we get most often.",
    items: [
      {
        q: "Do you take walk-ins?",
        a: "Yes, when a chair is free or about to be. If you book, your time is held and you get an SMS confirmation.",
      },
      {
        q: "Hygiene?",
        a: "We care a lot about hygiene and cleanliness. All machines are cleaned and disinfected before every customer.",
      },
      {
        q: "Do I have to pay a deposit?",
        a: "Booking requires a 50% deposit to hold your time. The rest is paid in the shop.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancel up to one hour before your appointment and your deposit is refunded in full.",
      },
      { q: "Do you speak English?", a: "Yes, Danish and English, both barbers." },
      {
        q: "How long does a haircut take?",
        a: "A haircut takes about 30 minutes. Haircut and beard together take about 45 minutes. The first visit usually takes a little longer because of the consultation.",
      },
      {
        q: "Can I bring a reference photo?",
        a: "Yes please. A photo is quicker than describing it, and your barber will tell you honestly whether it suits your hair.",
      },
    ],
  },
  footer: {
    tagline: "Where style becomes identity",
    pages: "Pages",
    contact: "Contact",
    hours: "Opening hours",
    monday: "Monday: closed",
    openDays: "Tuesday - Sunday: 10-18",
    privacy: "privacy policy (DA)",
    cookies: "cookie policy (DA)",
  },
};

export const t = lang === "en" ? en : da;
document.title = t.title;
