import { memo, useCallback, useMemo, useState } from "react";
import WhatsAppLink from "./WhatsAppLink.jsx";
import { CATEGORIES } from "../data/catalog.js";
import { categoryLabel, searchCatalog } from "../lib/catalogSearch.js";
import { useDebouncedValue } from "../hooks/useDebouncedValue.js";

const PAGE_SIZE = 6;

// Dibungkus memo: baris hanya dirender ulang jika item-nya berganti,
// bukan setiap kali pengguna mengetik di kolom pencarian.
const CatalogRow = memo(function CatalogRow({ item }) {
  return (
    <li className="catalog-row">
      <div>
        <h3 className="row-name">{item.name}</h3>
        <p className="row-cat">{categoryLabel(item.category)}</p>
      </div>
      <p className="row-desc">{item.description}</p>
      <WhatsAppLink
        className="link row-action"
        message={`Halo Yabes CCTV, saya ingin bertanya tentang ${item.name.toLowerCase()}.`}
        srText={` ${item.name} (membuka WhatsApp di tab baru)`}
      >
        Tanya produk
      </WhatsAppLink>
    </li>
  );
});

const CategoryChip = memo(function CategoryChip({ id, label, active, onSelect }) {
  return (
    <button type="button" className="chip" aria-pressed={active} onClick={() => onSelect(id)}>
      {label}
    </button>
  );
});

export default function CatalogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  // Pencarian berjalan 250 ms setelah pengguna berhenti mengetik.
  const debouncedQuery = useDebouncedValue(query, 250);
  const results = useMemo(
    () => searchCatalog(debouncedQuery, category),
    [debouncedQuery, category],
  );

  // Paginasi kembali ke halaman pertama otomatis saat filter berubah,
  // tanpa effect tambahan: hitungan hanya berlaku untuk filter yang sama.
  const filterKey = `${category}|${debouncedQuery}`;
  const [paging, setPaging] = useState({ key: filterKey, count: PAGE_SIZE });
  const count = paging.key === filterKey ? paging.count : PAGE_SIZE;
  const visible = useMemo(() => results.slice(0, count), [results, count]);

  const onQueryChange = useCallback((event) => setQuery(event.target.value), []);
  const onSelectCategory = useCallback((id) => setCategory(id), []);
  const onShowMore = useCallback(
    () => setPaging({ key: filterKey, count: count + PAGE_SIZE }),
    [filterKey, count],
  );
  const onReset = useCallback(() => {
    setQuery("");
    setCategory("all");
  }, []);

  const isPending = query !== debouncedQuery;
  const trimmed = debouncedQuery.trim();
  let status = `${results.length} jenis perangkat`;
  if (isPending) status = "Mencari...";
  else if (trimmed) status = `${results.length} hasil untuk “${trimmed}”`;

  const remaining = results.length - visible.length;

  return (
    <>
      <div className="catalog-controls">
        <div className="search">
          <label htmlFor="catalog-search">Cari perangkat</label>
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={onQueryChange}
            placeholder="Contoh: kamera outdoor, NVR, kabel"
            autoComplete="off"
            enterKeyHint="search"
          />
        </div>
        <div className="chips" role="group" aria-label="Filter kategori">
          {CATEGORIES.map((item) => (
            <CategoryChip
              key={item.id}
              id={item.id}
              label={item.label}
              active={item.id === category}
              onSelect={onSelectCategory}
            />
          ))}
        </div>
      </div>

      <p className="catalog-status" role="status" aria-live="polite">
        {status}
      </p>

      {visible.length > 0 ? (
        <ul className="catalog-list">
          {visible.map((item) => (
            <CatalogRow key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <div className="catalog-empty">
          <h3>Tidak ada perangkat yang cocok</h3>
          <p>Coba kata kunci lain, atau tanyakan langsung apa yang Anda cari lewat WhatsApp.</p>
          <div className="catalog-empty-actions">
            <button type="button" className="btn btn--outline" onClick={onReset}>
              Hapus pencarian
            </button>
            <WhatsAppLink
              className="link"
              message={`Halo Yabes CCTV, saya mencari ${trimmed || "perangkat CCTV"}.`}
            >
              Tanya lewat WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      )}

      {remaining > 0 && (
        <div className="catalog-more">
          <button type="button" className="btn btn--outline" onClick={onShowMore}>
            Tampilkan {Math.min(PAGE_SIZE, remaining)} lagi
          </button>
          <span className="catalog-count">
            Menampilkan {visible.length} dari {results.length}
          </span>
        </div>
      )}
    </>
  );
}
