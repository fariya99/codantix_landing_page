import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 

  base: '/codantix_landing_page/'
,   // 👈 VERY important for GitHub Pages
  plugins: [react()],
})
