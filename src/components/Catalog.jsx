import { lazy, memo } from "react";
import LazyOnView from "./LazyOnView.jsx";
import { CatalogSkeleton } from "./Skeletons.jsx";
import "../styles/catalog.css";

// Pencarian, filter, dan paginasi dipisah menjadi chunk sendiri.
// Chunk baru diunduh saat bagian ini mendekati layar.
const CatalogExplorer = lazy(() => import("./CatalogExplorer.jsx"));

function Catalog() {
  return (
    <section className="section catalog" id="katalog" aria-labelledby="katalog-title">
      <div className="wrap">
        <h2 className="section-title" id="katalog-title">
          Cari perangkat yang Anda butuhkan.
        </h2>
        <p className="section-lead">
          Ketik nama perangkat, lalu tanyakan harga dan ketersediaan lewat WhatsApp.
        </p>
        <LazyOnView fallback={<CatalogSkeleton />}>
          <CatalogExplorer />
        </LazyOnView>
      </div>
    </section>
  );
}

export default memo(Catalog);
