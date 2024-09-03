import express, { Request, Response } from 'express'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const router = express.Router()

/* GET home page. */
router.get('/', function (_req: Request, res: Response) {
  res.sendFile(path.join(dirname(fileURLToPath(import.meta.url)), './public/index.html'))
})

export default router