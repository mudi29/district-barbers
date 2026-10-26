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

export default function App() {
  // Tiny path-based router: /styleguide and /cookiepolitik get their own pages, everything else the site.
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/styleguide") return <StyleGuide />;
  if (path === "/cookiepolitik") return <CookiePolicy />;
  if (path === "/privatlivspolitik") return <PrivacyPolicy />;

  return (
    <>
      <ClickToComponent />
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
