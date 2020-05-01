import express from 'express'
import dotenv from 'dotenv'

import router from './components/router'

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT

const app = express()

app.use(router)

app.listen(port, () => {
  console.log(`oPay API listening on ${host}${port}`)
})