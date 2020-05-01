import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT

const app = express()

app.get('/', (_req: any, res: any) => {
  res.send('Heyooooo, World!')
})

app.get('/automobiles', (_req: any, res: any) => {
  res.send('Heyooooo, Automobiles!')
})

app.get('/contracts', (_req: any, res: any) => {
  res.send('Heyooooo, Contracts!')
})

app.get('/creditCardSystems', (_req: any, res: any) => {
  res.send('Heyooooo, Credit Card Systems!')
})

app.get('/users', (_req: any, res: any) => {
  res.send('Heyooooo, Users!')
})

app.listen(port, () => {
  console.log(`oPay API listening on ${host}${port}`)
  
})