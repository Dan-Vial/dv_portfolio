import express from 'express'
import { handleMail, sendMsgConfirmed } from '@middlewares/Email'
const router = express.Router()

router.post('/', handleMail, sendMsgConfirmed)

export default router