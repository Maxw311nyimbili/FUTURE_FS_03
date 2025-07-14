import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      process: 'process/browser', // ✅ Correct, no ".js"
    },
  },
  optimizeDeps: {
    include: ['process'],
  },
  build: {
    rollupOptions: {
      plugins: [
        inject({
          process: 'process', // ✅ Just 'process', let alias handle it
        }),
      ],
    },
  },
});
