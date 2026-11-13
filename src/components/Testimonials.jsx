import { TESTIMONIALS } from "../data/site.js";
import "../styles/testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimoni-title">
      <div className="wrap">
        <h2 className="section-title" id="testimoni-title">
          Keamanan terasa lebih dekat saat semuanya berjalan baik.
        </h2>

        <div className="quote-grid">
          {TESTIMONIALS.map((item, index) => (
            <figure className={index === 0 ? "quote quote--lead" : "quote"} key={item.id}>
              <blockquote>
                <p>{`“${item.text}”`}</p>
              </blockquote>
              <figcaption className="quote-who">{item.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
