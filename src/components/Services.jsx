import { memo } from "react";
import WhatsAppLink from "./WhatsAppLink.jsx";
import { MESSAGES, SERVICES } from "../data/site.js";
import "../styles/services.css";

function Services() {
  return (
    <section className="section services" id="layanan" aria-labelledby="layanan-title">
      <div className="wrap services-grid">
        <div className="services-intro">
          <h2 className="section-title" id="layanan-title">
            Dari perencanaan sampai sistem siap digunakan.
          </h2>
          <p className="section-lead">
            Kami bantu setiap langkah agar Anda mendapat sistem yang sesuai, terpasang dengan baik,
            dan nyaman dipakai.
          </p>
          <div className="services-cta">
            <WhatsAppLink className="btn" message={MESSAGES.services}>
              Diskusikan kebutuhan
            </WhatsAppLink>
          </div>
        </div>

        <ol className="steps">
          {SERVICES.map((service, index) => (
            <li className="step" key={service.title}>
              <span className="step-no" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="step-title">{service.title}</h3>
                <p className="step-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default memo(Services);
