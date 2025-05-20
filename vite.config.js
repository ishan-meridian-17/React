import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',  // ✅ REQUIRED FOR VERCEL TO LOAD ASSETS CORRECTLY
  server: {
    proxy: {
      '/api': {
        target: 'https://challenge-based-face-recognition-hnc5a2axefaehmfj.eastus-01.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
