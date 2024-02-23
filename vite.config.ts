import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Customize the build output
    outDir: 'dist',
    assetsDir: '.', // keep the original directory structure
    emptyOutDir: false, // do not delete the output directory before rebuilding

    // Copy specific files to the output directory
    rollupOptions: {
      output: {
        manualChunks: undefined, // disable code splitting
      },
    },
  },
})
