import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:'/',
  build: {
    outDir:'dist',
    rollupOptions: {
      external: ['styled-components'], // Adicione outras dependências se necessário
    },
  },
});
