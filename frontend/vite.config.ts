import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    port: 9443,
    https: {
      key: fs.readFileSync('../../../ssl/certs/localhost.key'),
      cert: fs.readFileSync('../../../ssl/certs/localhost.crt'),
    },
  },
})
