import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('VITE_APP_APPWRITE_URL:', process.env.VITE_APPWRITE_URL);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
