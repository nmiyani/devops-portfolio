import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://www.nilkanthprojects.site',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
