import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import { resolve } from 'path'
import tsconfig from './tsconfig.app.json'

function pathTsToVite(tsconfig: { compilerOptions: { paths: { [key: string]: string[] } } }): AliasOptions | undefined {
  const alias: AliasOptions | undefined = {}
  const paths = tsconfig.compilerOptions.paths

  for (const element in paths) {
    const nameKey: string = element.replace('/*', '')
    const path: string = resolve(__dirname, paths[element][0].replace('/*', ''))

    alias[nameKey] = path

    // TypeScript use Array / viteJs use string
    // for (const key in paths[element]) {
    //   alias[nameKey].push(paths[element][key])
    // }
  }
  return alias
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true,
    port: 9443,
    https: {
      key: fs.readFileSync('../../../ssl/certs/localhost.key'),
      cert: fs.readFileSync('../../../ssl/certs/localhost.crt'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        data: resolve(__dirname, 'src/data/Data.tsx'),
        // mainssr: resolve(__dirname, 'src/mainSSR.tsx'),
      },
    }
  },
  resolve: {
    alias: pathTsToVite(tsconfig)
  },
})
