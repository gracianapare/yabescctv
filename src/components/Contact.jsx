import { memo } from "react";
import WhatsAppLink from "./WhatsAppLink.jsx";
import { MESSAGES } from "../data/site.js";
import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="kontak" aria-labelledby="kontak-title">
      <div className="wrap contact-inner">
        <h2 id="kontak-title">Ceritakan kebutuhan keamanan Anda.</h2>
        <WhatsAppLink className="btn btn--light" message={MESSAGES.contact}>
          Hubungi kami di WhatsApp
        </WhatsAppLink>
      </div>
    </section>
  );
}

export default memo(Contact);
