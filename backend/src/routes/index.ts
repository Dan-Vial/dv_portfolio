import express, { Request, Response } from 'express'
import path, { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'

import { head } from '../data/head'

const router = express.Router()

const env: string = process.env.NODE_ENV || 'development'
const paths = {
  development: join(dirname(fileURLToPath(import.meta.url)), '../public/index.html'),
  production: join(dirname(fileURLToPath(import.meta.url)), './public/index.html'),
}
const indexFilePath: string = paths[env as keyof typeof paths] || paths.development


const template: string = await readFile(indexFilePath, 'utf-8')

function ssrRustine(res: Response) {
  res.sendFile(join(dirname(fileURLToPath(import.meta.url)), './public/ssr_rustine.html'))
}

router.get('/', async function (req: Request, res: Response) {
  console.log('user-agent: ', req.headers['user-agent'])
  console.log('url: ', req.originalUrl)

  if (req.useragent && req.useragent.isBot) {

    if (req.originalUrl === '/') {
      ssrRustine(res)
      return
    }

    /**
     * Bot REACT SSR
     */
    const render = (await import(path.join(dirname(fileURLToPath(import.meta.url)), './public/mainSSR.js'))).default

    console.log('-1-')

    const rendered: string = await render(req, res)

    console.log('-2-')


    const html = template
      .replace('<!--app-html-->', rendered ?? '')
      .replace('<!--app-head-->', head ?? '')

    console.log('-3-')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } else {

    /**
     * client REACT
     * DEV='../public/index.html' | PROD='./public/index.html'
     */
    res.sendFile(indexFilePath)
  }
})

export default router