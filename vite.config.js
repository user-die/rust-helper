import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",

      manifest: {
        name: "rust-helper",
        short_name: "rust-helper",
        description: "Progressive Web App with Offline Support",
        theme_color: "#16181c",
        background_color: "#16181c",
        display_override: ["fullscreen", "minimal-ui"],
        display: "standalone",
        id: "/",
        icons: [
          {
            src: "icon64.webp",
            type: "image/webp",
            sizes: "64x64",
          },
          {
            src: "icon192.webp",
            type: "image/webp",
            sizes: "192x192",
          },
          {
            src: "icon512.webp",
            type: "image/webp",
            sizes: "512x512",
          },
        ],
        screenshots: [
          {
            src: "screenshot1.webp",
            sizes: "533x795",
            type: "image/webp",
            form_factor: "narrow",
          },
          {
            src: "screenshot2.webp",
            sizes: "1920x945",
            type: "image/webp",
            form_factor: "wide",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico, webp}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
