import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? `/${process.env.VITE_REPOSITORY_NAME}/` : '/',
  // base: /frontEnd2/,
})
