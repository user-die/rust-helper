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
            src: "icon64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "icon192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "icon512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        screenshots: [
          {
            src: "screenshot1.png",
            sizes: "533x795",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "screenshot2.png",
            sizes: "1920x945",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
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
