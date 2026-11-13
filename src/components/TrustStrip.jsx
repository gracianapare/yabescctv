import { memo } from "react";
import { TRUST_ITEMS } from "../data/site.js";
import "../styles/trust.css";

function TrustStrip() {
  return (
    <section className="trust" aria-label="Keunggulan Yabes CCTV">
      <div className="wrap">
        <ul className="trust-list">
          {TRUST_ITEMS.map((item) => (
            <li className="trust-item" key={item.title}>
              <strong className="trust-title">{item.title}</strong>
              <span className="trust-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(TrustStrip);
