import express from 'express'
import { ssr } from '@controllers/Ssr'

const router = express.Router()

router.get('/', ssr)

export default router