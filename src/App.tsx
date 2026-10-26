import { ClickToComponent } from "click-to-react-component";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Barbers } from "./sections/Barbers";
import { Reviews } from "./sections/Reviews";
import { Prices } from "./sections/Prices";
import { About } from "./sections/About";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { StyleGuide } from "./sections/StyleGuide";
import { CookiePolicy } from "./sections/CookiePolicy";
import { PrivacyPolicy } from "./sections/PrivacyPolicy";
import { NotFound } from "./sections/NotFound";
import { t } from "./i18n";

export default function App() {
  // Tiny path-based router: /styleguide and /cookiepolitik get their own pages, everything else the site.
  const path = window.location.pathname.replace(/\/$/, "");
  if (import.meta.env.DEV && path === "/styleguide") return <StyleGuide />;
  if (path === "/cookiepolitik") {
    document.title = "Cookiepolitik | District Barbers";
    return <CookiePolicy />;
  }
  if (path === "/privatlivspolitik") {
    document.title = "Privatlivspolitik | District Barbers";
    return <PrivacyPolicy />;
  }

  if (path !== "" && path !== "/en") {
    document.title = `${t.notFound.heading} | District Barbers`;
    return <NotFound />;
  }

  return (
    <>
      {import.meta.env.DEV && <ClickToComponent />}
      <Navbar />
      <main>
        <Hero />
        <Barbers />
        <Reviews />
        <Prices />
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
