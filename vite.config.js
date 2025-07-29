import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 

  base: '/fariya99.github.io/'
,   // 👈 VERY important for GitHub Pages
  plugins: [react()],
})
