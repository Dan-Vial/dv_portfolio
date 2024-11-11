import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isSSR = mode === 'ssr'

  return {
    plugins: [
      tsconfigPaths({
        configNames: ['tsconfig.json']
      }),
      react()
    ],
    server: {
      port: 4000,
      proxy: {
        '/api': 'http://localhost:4001',
      }
    },
    build: {
      sourcemap: true,
      ssrManifest: !isSSR,
      ssr: isSSR ? 'src/mainSSR.tsx' : false,
      outDir: 'dist',
      emptyOutDir: !isSSR,
      rollupOptions: {
        input: (() => {
          if (isSSR) {
            return 'src/mainSSR.tsx'
          } else {
            return 'index.html'
          }
        })(),
        output: {
          entryFileNames: isSSR ? 'assets/mainSSR-[hash].js' : 'assets/[name]-[hash].js',
        },
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler'
        }
      }
    }
  }
})