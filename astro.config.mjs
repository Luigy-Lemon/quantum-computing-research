import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ecdsafail.com',
  outDir: 'dist',
  build: {
    format: 'file',
  },
  vite: {
    server: {
      proxy: {
        '/api/benchmarks': {
          target: 'https://www.ecdsa.fail',
          changeOrigin: true,
          secure: false
        }
      }
    },
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
