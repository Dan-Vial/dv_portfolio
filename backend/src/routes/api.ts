import express, { Request, Response } from 'express'
const router = express.Router()

import { pool } from '@src/postgres'

router.get('/', async (_req: Request, res: Response) => {
  const resDB = await pool.query('SELECT NOW()')

  res.json({ name: 'api', version: 'v1.0.0', time: 'Mardi 12/11/2024 17:00:00', test_db: resDB.rows[0].now })
})

export default router