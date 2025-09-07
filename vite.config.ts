import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "./src/shared/styles/index.module.scss"`,
    //     },
    //   },
    // }
  }
})
