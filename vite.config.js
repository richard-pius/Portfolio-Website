import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Put all external libraries from node_modules into one single, safe vendor bundle
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Inform Vite that we are intentionally packing our core 3D libraries into the vendor bundle
    chunkSizeWarningLimit: 1200,
  },
});