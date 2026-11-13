import { memo } from "react";
import LazyImage from "./LazyImage.jsx";
import WhatsAppLink from "./WhatsAppLink.jsx";
import { MESSAGES, PRODUCTS } from "../data/site.js";
import "../styles/products.css";

const IMAGE_PROPS = {
  lead: {
    widths: [480, 800, 1200],
    sizes: "(max-width: 860px) 100vw, 55vw",
    width: 1200,
    height: 960,
  },
  compact: {
    widths: [320, 480, 640, 800],
    sizes: "(max-width: 640px) 100vw, (max-width: 860px) 40vw, 20vw",
    width: 800,
    height: 800,
  },
};

const ProductCard = memo(function ProductCard({ product }) {
  return (
    <article className={`product product--${product.variant}`}>
      <LazyImage photo={product.photo} alt={product.alt} {...IMAGE_PROPS[product.variant]} />
      <div className="product-body">
        <p className="product-kicker">{product.kicker}</p>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-text">{product.text}</p>
        <WhatsAppLink
          className="link product-link"
          message={product.message}
          srText={` ${product.title} (membuka WhatsApp di tab baru)`}
        >
          Tanya produk
        </WhatsAppLink>
      </div>
    </article>
  );
});

function Products() {
  return (
    <section className="section products" id="produk" aria-labelledby="produk-title">
      <div className="wrap">
        <div className="products-head">
          <div>
            <h2 className="section-title" id="produk-title">
              Perangkat yang bekerja untuk Anda.
            </h2>
            <p className="section-lead">
              Pilih solusi pengawasan sesuai area, kebutuhan, dan cara Anda ingin memantau.
            </p>
          </div>
          <WhatsAppLink className="link" message={MESSAGES.products}>
            Tanya rekomendasi
          </WhatsAppLink>
        </div>

        <div className="products-layout">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Products);
