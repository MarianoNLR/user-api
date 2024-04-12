import express, { json } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createUserRouter } from './routes/users.js'

export const createApp = ({ userModel }) => {
  const app = express()
  app.disable('x-powered-by')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors())
  app.use(json())

  app.use('/api/users', createUserRouter({ userModel }))

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  })
}
