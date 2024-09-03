import express, { Request, Response } from 'express'

const router = express.Router()

/* GET users listing. */
router.get('/', function (_req: Request, res: Response) {
  res.send({ users: 'API backend OK' })
})

export default router
