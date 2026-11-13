import { memo } from "react";
import Logo from "./Logo.jsx";
import { CURRENT_YEAR } from "../data/site.js";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <a className="brand" href="#beranda">
          <Logo />
          Yabes CCTV
        </a>
        <p className="footer-copy">
          © {CURRENT_YEAR} Yabes CCTV. Keamanan untuk hal yang berarti.
        </p>
        <nav className="footer-nav" aria-label="Navigasi footer">
          <a href="#tentang">Tentang</a>
          <a href="#produk">Produk</a>
          <a href="#layanan">Layanan</a>
        </nav>
      </div>
    </footer>
  );
}

export default memo(Footer);
