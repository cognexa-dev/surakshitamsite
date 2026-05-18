// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://surakshitam.com",
  adapter: vercel(),
  output: "server",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
