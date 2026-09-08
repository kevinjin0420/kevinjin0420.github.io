import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kevinjin.dev',
  base: '/',
  outDir: './dist',
  publicDir: './public',
  build: {
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: true
    }
  }
});
