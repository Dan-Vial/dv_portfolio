import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
// import alias from '@rollup/plugin-alias'
// import { join, dirname, resolve } from 'path'
// import { fileURLToPath } from 'url'
// import copy from 'rollup-plugin-copy'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = join(dirname(__filename))

export default {
  input: './src/bin/www.ts',
  output: {
    dir: 'dist'
  },
  plugins: [
    // alias({
    //   entries: [
    //     { find: '@', replacement: resolve(__dirname, './src') },
    //     { find: '@backend', replacement: resolve(__dirname, './src/BackEnd') }
    //   ]
    // }),
    // nodeResolve(),
    json(),
    commonjs(),
    typescript(),
    terser({ module: true, output: { comments: 'some' } }),
    // copy({
    //   targets: [
    //     { src: ['src/BackEnd/.env', 'src/BackEnd/swagger.yaml', 'ssl/cert'], dest: 'dist' }
    //   ]
    // })
  ]
}
