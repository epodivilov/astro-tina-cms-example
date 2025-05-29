// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tinaDirective from "./astro-tina-directive/register";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: process.env.ASTRO_BASE,
  integrations: [mdx(), sitemap(), react(), tinaDirective()],
});
