import { ClickToComponent } from "click-to-react-component";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Barbers } from "./sections/Barbers";
import { Reviews } from "./sections/Reviews";
import { Prices } from "./sections/Prices";
import { About } from "./sections/About";
import { Info } from "./sections/Info";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { StyleGuide } from "./sections/StyleGuide";

export default function App() {
  // Tiny path-based router: /styleguide shows the design reference, everything else the site.
  if (window.location.pathname.replace(/\/$/, "") === "/styleguide") {
    return <StyleGuide />;
  }

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
        <Info />
      </main>
      <Footer />
    </>
  );
}
