import { NextFunction, Request, Response } from 'express'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
})

export interface EmailOpts {
  from: string,
  to: string,
  subject: string,
  html: string
}

function setMailOptions(req: Request): EmailOpts {
  return {
    from: `${req.body.data.email}`,
    to: process.env.MAIL_USER as string,
    subject: 'Sending Email using Node.js dvpro.fr',
    html: `<div>${req.body.data.name}</div><br /><div>${req.body.data.message}</div>`
  }
}

export const handleMail = (req: Request, _res: Response, next: NextFunction) => {
  try {
    transporter.sendMail(setMailOptions(req), function (error, info) {
      if (error) throw new Error(JSON.stringify(error, null, '\t'))
      console.log('Email sent: ' + info.response)
    })

  } catch (error) {
    console.log(error)
  }
  next()
}

export const sendMsgConfirmed = function (_req: Request, res: Response) {
  res.send({ msg: 'Send Mail OK' })
}