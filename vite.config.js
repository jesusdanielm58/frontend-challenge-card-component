import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    base:"/frontend-challenge-card-component/",
    preprocessorOptions: {
      scss: {
          additionalData: `@import "src/assets/style.scss";`
      }
    }
  }
})
