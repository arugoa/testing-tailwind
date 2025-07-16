import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      // switch to "true" to enable sw on development
      devOptions: { enabled: true },
      registerType: 'autoUpdate',
      workbox: { globPatterns: ['**/*.{js,jsx,css,html,json}', '**/*.{svg,png,jpg,gif}', '**/**/*.{svg,png,jpg}', '*.{json}'] },
    }),
  ],
})
