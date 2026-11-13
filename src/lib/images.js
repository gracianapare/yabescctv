const BASE = "https://images.unsplash.com";

// Unsplash mengecilkan dan mengompres gambar di server lewat parameter URL.
// auto=format memilih WebP atau AVIF sesuai browser, q=65 menurunkan ukuran file.
export function unsplash(photoId, width, quality = 65) {
  return `${BASE}/${photoId}?auto=format&fit=crop&q=${quality}&w=${width}`;
}
