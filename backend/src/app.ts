// import createError from 'http-errors'
import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import compression from 'compression'
// import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'
import useragent from 'express-useragent'
import './postgres'
import { createStream } from 'rotating-file-stream'

import indexRouter from '@routes/index'
import msgRouter from '@routes/msg'
import apiRouter from '@routes/api'

const app = express()
const accessLogStream = createStream('access.log', {
  interval: '1M',
  path: join(dirname(fileURLToPath(import.meta.url)), 'logs'),
  compress: true
})
app.use(logger('combined', { stream: accessLogStream }))
app.use(logger('dev'))
app.use(compression())
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ['\'self\''],
      frameSrc: ['\'self\'', 'https://www.google.com/'],
      scriptSrc: [
        '\'self\'',
        '\'unsafe-inline\'',
        'https://maps.googleapis.com',
        'https://www.google.com',
        'https://www.gstatic.com'
      ],
    }
  }
}))
app.disable('x-powered-by')
app.use(cookieParser())
app.use(useragent.express())

/**
 * orders important: API BackEnd, static file public, REACT route imdex.html
 */
app.use('/mail', msgRouter)
app.use('/api', apiRouter)
app.use(express.static(process.env.DIR_PUBLIC!, { index: false }))
app.use('*', indexRouter)

export default app