import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',
  server: {
    allowedHosts: ['nine0-s-collection.onrender.com'],
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  preview: {
    allowedHosts: ['nine0-s-collection.onrender.com']
  }
})
