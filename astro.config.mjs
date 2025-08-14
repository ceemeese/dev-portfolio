// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import vue from '@astrojs/vue';


import icon from 'astro-icon';


export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue(), icon()]
});