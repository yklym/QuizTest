import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all available IP addresses
    port: 3000, // Change port if needed
  },
  base: 'Quiz',
})
