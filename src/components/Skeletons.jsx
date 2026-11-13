import "../styles/skeletons.css";

const ROWS = [0, 1, 2, 3, 4, 5];
const CHIPS = [0, 1, 2, 3, 4];

// Bentuknya meniru CatalogExplorer supaya tidak ada lompatan saat konten asli muncul.
export function CatalogSkeleton() {
  return (
    <div role="status">
      <span className="sr-only">Memuat katalog perangkat</span>
      <div aria-hidden="true">
        <div className="catalog-controls">
          <div className="search">
            <div className="skeleton sk-label" />
            <div className="skeleton sk-input" />
          </div>
          <div className="chips">
            {CHIPS.map((chip) => (
              <div className="skeleton sk-chip" key={chip} />
            ))}
          </div>
        </div>
        <div className="catalog-status sk-status" />
        <ul className="catalog-list">
          {ROWS.map((row) => (
            <li className="catalog-row" key={row}>
              <div>
                <div className="skeleton sk-line sk-line--name" />
                <div className="skeleton sk-line sk-line--cat" />
              </div>
              <div className="skeleton sk-line sk-line--desc" />
              <div className="skeleton sk-line sk-line--action" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function BandSkeleton() {
  return (
    <div className="band-skeleton" role="status">
      <span className="sr-only">Memuat testimoni</span>
      <div className="wrap" aria-hidden="true">
        <div className="skeleton sk-band-title" />
        <div className="skeleton sk-band-quote" />
        <div className="sk-band-row">
          <div className="skeleton sk-band-small" />
          <div className="skeleton sk-band-small" />
        </div>
      </div>
    </div>
  );
}
