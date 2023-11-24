import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api' : 'https://joke-app-dyap.onrender.com',
    },
  },
  plugins: [react()],
})


