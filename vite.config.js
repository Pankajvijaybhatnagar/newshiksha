import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'   // <-- default export

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.shikshamahakumbh.com',
       generateRobotsTxt: false, 
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://forms.shikshamahakumbh.com", // Your backend
        changeOrigin: true,
        secure: false, // if using https and self-signed cert
      },
    },
  },
})
