import express from 'express'
import { readFile } from 'fs/promises'
import { head } from '../data/head'
import { resolveWithRegex } from '@utils/ResolveWithRegex'

const indexFilePath: string = `${process.env.DIR_PUBLIC!}/index.html`
const template: string = await readFile(indexFilePath, 'utf-8')
const render: (fetchRequest: Request) => Promise<string> = (await import(await resolveWithRegex(`${process.env.DIR_PUBLIC!}/assets`, /^mainSSR-.+\.js$/))).default

export const ssr = async (req: express.Request, res: express.Response) => {
  if (req.useragent && req.useragent.isBot) { // Bot REACT SSR
    console.log('user-agent: ', req.headers['user-agent'])
    const rendered: string = await render(createFetchRequest(req, res))
    const html = template
      .replace('<!--app-html-->', rendered ?? '')
      .replace('<!--app-head-->', head ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } else { // client REACT
    res.sendFile(indexFilePath)
  }
}

/**
 * Function createFetchRequest: https://reactrouter.com/en/main/guides/ssr
 * Modified function, JavaScript to TypScript
 */
function createFetchRequest(req: express.Request, res: express.Response) {
  const origin = `${req.protocol}://${req.get('host')}`
  const url = new URL(req.originalUrl || req.url, origin)

  const controller = new AbortController()
  res.on('close', () => controller.abort())

  const headers = new Headers()

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value)
        }
      } else {
        headers.set(key, `${values}`)
      }
    }
  }

  const init = {
    method: req.method,
    headers,
    signal: controller.signal,
    body: null
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req.body
  }

  return new Request(url.href, init)
}