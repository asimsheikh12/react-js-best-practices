import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import alias from 'vite-plugin-alias';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    }),
  ],
});
