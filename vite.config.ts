
import { defineConfig } from 'vite'

import path from 'path'
import { fileURLToPath, URL } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'logg',
      fileName: (format) => `logg.${format}.js`
    },
    sourcemap: true
  }
})
