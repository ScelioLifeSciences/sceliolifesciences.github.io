import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/sceliolifesciences/", // Updated to match your repository name
  plugins: [react()],
})
