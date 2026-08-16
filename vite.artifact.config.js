import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// One-off config used only to produce a single-file, no-external-request
// bundle for sharing as a preview Artifact. Not used for real deployment.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: 'dist-artifact',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'index.artifact.html',
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})
