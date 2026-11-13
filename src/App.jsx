import { lazy } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import Catalog from "./components/Catalog.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import LazyOnView from "./components/LazyOnView.jsx";
import { BandSkeleton } from "./components/Skeletons.jsx";

// Testimoni ada di bawah layar, jadi kodenya baru diunduh saat mendekati area pandang.
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));

export default function App() {
  return (
    <>
      <a className="skip-link" href="#konten">
        Lewati ke konten
      </a>
      <Header />
      <main id="konten" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <About />
        <Products />
        <Catalog />
        <Services />
        <LazyOnView id="testimoni" fallback={<BandSkeleton />}>
          <Testimonials />
        </LazyOnView>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
