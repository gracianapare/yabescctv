import { memo, useCallback, useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { MESSAGES, NAV_ITEMS, SECTION_IDS } from "../data/site.js";
import "../styles/header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((value) => !value), []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <a className="brand" href="#beranda" onClick={close}>
          <Logo />
          Yabes CCTV
        </a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="menu-utama"
          onClick={toggle}
        >
          <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav id="menu-utama" className={open ? "nav is-open" : "nav"} aria-label="Navigasi utama">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className="nav-link"
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-cta">
              <WhatsAppLink className="btn btn--small" message={MESSAGES.general}>
                Hubungi kami
              </WhatsAppLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);
