import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // This splits your heavy node_modules libraries into separate files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Put Three.js and React Three Fiber into a dedicated 3d bundle
            if (id.includes('three') || id.includes('@react-three') || id.includes('@react-three/drei')) {
              return 'threejs-vendor';
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
    // Optional: Bump the warning limit slightly since 3D apps are naturally heavy
    chunkSizeWarningLimit: 800,
  },
});