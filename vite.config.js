import { fileURLToPath, URL } from 'node:url';
import fs from 'node:fs';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';

function preloadProfilePicture() {
  return {
    name: 'preload-profile-picture',
    transformIndexHtml(html) {
      const jsonPath = fileURLToPath(new URL('./src/collections/biolink.json', import.meta.url));
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

      return html.replace(
        '<!-- preload-profile-picture -->',
        `<link rel="preload" as="image" href="${data.profile.logo}" fetchpriority="high" />`
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(), preloadProfilePicture()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
