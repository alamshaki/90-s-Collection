import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/90-s-Collection/',
  server: {
    allowedHosts: ['nine0-s-collection.onrender.com']
  },
  preview: {
    allowedHosts: ['nine0-s-collection.onrender.com']
  }
})
