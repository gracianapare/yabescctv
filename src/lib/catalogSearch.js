import { CATALOG, CATEGORIES } from "../data/catalog.js";

const CATEGORY_LABELS = new Map(CATEGORIES.map((category) => [category.id, category.label]));

export function categoryLabel(id) {
  return CATEGORY_LABELS.get(id) ?? "";
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

// Indeks dibuat satu kali saat modul dimuat. Teks tiap item sudah dinormalisasi,
// jadi setiap ketikan hanya melakukan pencocokan string.
const INDEX = CATALOG.map((item) => ({
  item,
  category: item.category,
  haystack: normalize(
    `${item.name} ${item.description} ${categoryLabel(item.category)} ${item.keywords.join(" ")}`,
  ),
}));

// Hasil pencarian disimpan per kombinasi kata kunci dan kategori.
// Array yang sama dikembalikan untuk kunci yang sama, sehingga komponen tidak
// merender ulang daftar tanpa perubahan.
const CACHE_LIMIT = 60;
const resultCache = new Map();

export function searchCatalog(query, category = "all") {
  const normalized = normalize(query);
  const key = `${category}|${normalized}`;

  const cached = resultCache.get(key);
  if (cached) return cached;

  const tokens = normalized.split(/\s+/).filter(Boolean);
  const results = INDEX.filter(
    (entry) =>
      (category === "all" || entry.category === category) &&
      tokens.every((token) => entry.haystack.includes(token)),
  ).map((entry) => entry.item);

  if (resultCache.size >= CACHE_LIMIT) {
    resultCache.delete(resultCache.keys().next().value);
  }
  resultCache.set(key, results);
  return results;
}
