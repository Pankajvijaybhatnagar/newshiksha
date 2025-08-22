import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteSitemapPlugin } from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: 'https://www.shikshamahakumbh.com', // ✅ Your domain
      routes: [
        '/', 
        '/about',
        '/registration',
        '/conference',
        '/contact',
        // 👉 add more routes here as your app grows
      ],
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
})
