import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Dùng để xử lý alias

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/page'),
      '@containers': path.resolve(__dirname, './src/container'),
      '@layouts': path.resolve(__dirname, './src/layout'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@components': path.resolve(__dirname, './src/components'), // Thêm alias cho components nếu cần
      '@utils': path.resolve(__dirname, './src/utils'), // Alias cho các tiện ích
      '@src': path.resolve(__dirname, './src'), // Alias cho các tiện ích
    },
  },
  base: "/Spring2025SWD392_NET1709_thinh_fe/"
})
