import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT

const app = express()

app.get('/', (_req: any, res: any) => {
  res.send('Heyooooo, World!')
})

app.listen(port, () => {
  console.log(`oPay API listening on ${host}${port}`)
  
})