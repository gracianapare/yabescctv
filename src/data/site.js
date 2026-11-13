// Semua teks situs ada di file ini. Ubah di sini, tidak perlu menyentuh komponen.

export const SECTION_IDS = ["beranda", "tentang", "produk", "katalog", "layanan", "testimoni", "kontak"];

export const NAV_ITEMS = [
  { id: "tentang", label: "Tentang" },
  { id: "produk", label: "Produk" },
  { id: "katalog", label: "Katalog" },
  { id: "layanan", label: "Layanan" },
  { id: "testimoni", label: "Testimoni" },
];

export const MESSAGES = {
  general: "Halo Yabes CCTV, saya ingin bertanya tentang solusi keamanan.",
  consult: "Halo Yabes CCTV, saya ingin konsultasi solusi CCTV.",
  products: "Halo Yabes CCTV, saya ingin bertanya tentang produk.",
  services: "Halo Yabes CCTV, saya ingin konsultasi layanan.",
  contact: "Halo Yabes CCTV, saya ingin konsultasi solusi keamanan.",
};

export const TRUST_ITEMS = [
  { title: "Instalasi rapi", text: "Detail diperhatikan, kabel tertata" },
  { title: "Produk terpilih", text: "Solusi sesuai kebutuhan dan anggaran" },
  { title: "Siap mendampingi", text: "Bantuan teknis setelah pemasangan" },
  { title: "Untuk berbagai lokasi", text: "Rumah, toko, kantor, hingga gudang" },
];

export const COMMITMENTS = [
  "Konsultasi sesuai kebutuhan",
  "Rekomendasi tanpa berlebihan",
  "Pemasangan oleh teknisi",
  "Panduan penggunaan yang jelas",
];

// "photo" adalah ID foto Unsplash yang sama dengan situs lama.
export const PRODUCTS = [
  {
    id: "kamera",
    variant: "lead",
    kicker: "Pemantauan visual",
    title: "Kamera CCTV",
    text: "Pilihan kamera indoor dan outdoor dengan kualitas gambar yang jelas untuk kebutuhan harian.",
    photo: "photo-1558008258-3256797b43f3",
    alt: "Kamera CCTV untuk pemantauan area",
    message: "Halo Yabes CCTV, saya tertarik dengan kamera CCTV.",
  },
  {
    id: "pendukung",
    variant: "compact",
    kicker: "Penyimpanan dan koneksi",
    title: "Perangkat pendukung",
    text: "Rekorder, penyimpanan, dan perangkat jaringan untuk menjaga sistem berjalan stabil.",
    photo: "photo-1518770660439-4636190af475",
    alt: "Perangkat elektronik untuk sistem keamanan",
    message: "Halo Yabes CCTV, saya ingin bertanya tentang perangkat pendukung.",
  },
  {
    id: "jarak-jauh",
    variant: "compact",
    kicker: "Kontrol praktis",
    title: "Akses jarak jauh",
    text: "Pantau kondisi lokasi secara praktis dari ponsel dengan pengaturan yang mudah dipahami.",
    photo: "photo-1511707171634-5f897ff02aa9",
    alt: "Ponsel untuk mengakses sistem pemantauan dari jarak jauh",
    message: "Halo Yabes CCTV, saya ingin bertanya tentang akses jarak jauh.",
  },
];

export const SERVICES = [
  {
    title: "Konsultasi dan survei",
    text: "Pahami kebutuhan dan titik pemantauan sebelum menentukan perangkat.",
  },
  {
    title: "Instalasi CCTV",
    text: "Pemasangan terencana dengan perhatian pada posisi, jangkauan, dan kerapian.",
  },
  {
    title: "Pengaturan akses ponsel",
    text: "Bantuan menghubungkan sistem agar rekaman dapat dipantau dengan praktis.",
  },
  {
    title: "Pemeliharaan dan dukungan",
    text: "Pengecekan dan bantuan teknis untuk menjaga sistem berfungsi dengan baik.",
  },
];

// Testimoni di bawah masih teks bawaan situs lama. Ganti dengan kutipan pelanggan asli.
export const TESTIMONIALS = [
  {
    id: "retail",
    text: "Pemasangannya rapi dan dijelaskan dengan sabar. Sekarang saya bisa cek toko dari rumah dengan lebih tenang.",
    who: "Pemilik usaha retail",
  },
  {
    id: "rumah",
    text: "Dibantu memilih kamera yang memang kami perlukan. Prosesnya jelas dari awal sampai selesai.",
    who: "Pelanggan rumah tinggal",
  },
  {
    id: "kantor",
    text: "Timnya responsif saat kami butuh bantuan mengatur akses CCTV di ponsel.",
    who: "Pengelola kantor",
  },
];

export const CURRENT_YEAR = new Date().getFullYear();
