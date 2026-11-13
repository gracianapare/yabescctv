import { memo } from "react";
import { COMMITMENTS } from "../data/site.js";
import "../styles/about.css";

function About() {
  return (
    <section className="section about" id="tentang" aria-labelledby="tentang-title">
      <div className="wrap about-grid">
        <div>
          <h2 className="section-title" id="tentang-title">
            Rasa aman dimulai dari solusi yang tepat.
          </h2>
          <p className="about-aside">Perlindungan dirancang mengikuti kebutuhan lokasi Anda.</p>
        </div>

        <div className="about-body">
          <p>
            Yabes CCTV membantu Anda memilih dan memasang sistem pengawasan yang mudah digunakan.
            Keamanan yang baik membutuhkan perangkat yang sesuai, perencanaan yang matang, dan
            dukungan setelah pemasangan.
          </p>
          <ul className="commit-list">
            {COMMITMENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="link" href="#layanan">
            Lihat layanan kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
