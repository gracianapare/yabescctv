import { memo } from "react";
import MonitorWall from "./MonitorWall.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";
import { MESSAGES } from "../data/site.js";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="beranda" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">Keamanan terjaga. Pikiran lebih tenang.</h1>
          <p className="hero-lead">
            Kamera CCTV yang tepat, pemasangan rapi, dan bantuan teknis yang bisa diandalkan untuk
            rumah maupun bisnis Anda.
          </p>
          <div className="hero-actions">
            <WhatsAppLink className="btn" message={MESSAGES.consult}>
              Konsultasi gratis
            </WhatsAppLink>
            <a className="link" href="#produk">
              Lihat produk
            </a>
          </div>
        </div>
        <MonitorWall />
      </div>
    </section>
  );
}

export default memo(Hero);
