import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Include core react files AND threejs files in the exact same chunk
            if (
              id.includes('react') || 
              id.includes('react-dom') || 
              id.includes('three') || 
              id.includes('@react-three') || 
              id.includes('@react-three/drei')
            ) {
              return 'threejs-framework-vendor';
            }
            // Put Framer Motion into its own bundle
            if (id.includes('framer-motion')) {
              return 'motion-vendor';
            }
            // Everything else stays in a general vendor bundle
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});