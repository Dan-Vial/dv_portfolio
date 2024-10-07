// import createError from 'http-errors'
import express from 'express'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import compression from 'compression'
// import cors from 'cors'
// import helmet from 'helmet'
import 'dotenv/config'
import useragent from 'express-useragent'

import indexRouter from './routes/index'
import usersRouter from './routes/users'
import msgRouter from './routes/msg'

const app = express()

app.use(logger('dev'))
app.use(compression())
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(helmet({ crossOriginResourcePolicy: false }))
app.disable('x-powered-by')
app.use(cookieParser())
app.use(useragent.express())

/**
 * orders important: API BackEnd, static file public, REACT route imdex.html
 */
app.use('/mail', msgRouter)
app.use('/users', usersRouter)
app.use(express.static(join(dirname(fileURLToPath(import.meta.url)), 'public'), { index: false }))
app.use('*', indexRouter)

export default app