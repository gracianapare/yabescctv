import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    // Setiap komponen lazy membawa CSS-nya sendiri, jadi CSS ikut terpecah.
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        // React dipisah supaya tetap ter-cache saat kode situs berubah.
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    open: true,
  },
});
