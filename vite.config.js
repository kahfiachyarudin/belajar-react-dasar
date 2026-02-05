import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Tugas from './src/tugas/Tugas'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        helloworld: 'src/hello-world/main.jsx',
        counter: 'src/counter/main.jsx',
        Tugas: 'src/bikin-website/main.jsx',
      }
    }
  }
})
