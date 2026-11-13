// Nomor diatur lewat file .env (lihat .env.example), bukan di dalam kode.
const NUMBER = String(import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

// Cache kecil: pesan yang sama tidak dirakit ulang di setiap render.
const urlCache = new Map();

export function buildWhatsAppUrl(message) {
  let url = urlCache.get(message);
  if (!url) {
    url = `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
    urlCache.set(message, url);
  }
  return url;
}
