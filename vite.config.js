import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yago-vibe/', // GitHub Pages 주소에 맞춰 설정
  build: {
    outDir: 'dist', // Vite 표준 빌드 디렉토리 사용
    sourcemap: true,
  },
  server: {
    port: 3000, // CRA 기본 포트와 동일
    open: true,
  },
}) 