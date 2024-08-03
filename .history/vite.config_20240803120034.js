import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'DOTenv';
config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
