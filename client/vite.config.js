import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://127.0.0.1:3001',
        secure: false,
        changeOrigin: true
      }
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true
  }
})
