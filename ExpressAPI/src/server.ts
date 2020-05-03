import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import router from './router'

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT
const database = process.env.DATABASE
const dbBaseUrl = process.env.DB_BASE_URL
const connString = `${dbBaseUrl}/${database}`
const options = { useNewUrlParser: true }

const app = express()

mongoose.connect(`${connString}`, options)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log(`connected to MongoDB`)  
})

app.use(router)

app.listen(port, () => {
  console.log(`oPay API listening on ${host}${port}`)
})