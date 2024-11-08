import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://maik3345.github.io/test-vtex-ecommerce-site",
  server: {
    proxy: {
      "/graphql": {
        target: "https://test-ecommerce-backend.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/graphql/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        assetFileNames: "index.css",
      },
    },
  },
});
