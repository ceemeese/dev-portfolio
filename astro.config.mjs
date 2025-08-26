// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import icon from 'astro-icon';

import vercel from '@astrojs/vercel';
 

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue(), icon()],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: false,
    },
  })
});