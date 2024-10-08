import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/api': {
        target: 'http://localhost:4000', // The URL of your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites '/api' from the front-end request
      },
    },
  },
});
