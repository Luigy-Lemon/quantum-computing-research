import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ecdsafail.com',
  outDir: 'dist',
  build: {
    format: 'file',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss', // or 'esbuild'
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    }
  }
});
