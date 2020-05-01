import express from 'express'
import dotenv from 'dotenv'

import home from './home'
import automobiles from './automobiles'
import contracts from './contracts'
import creditCardSystems from './creditCardSystems'
import users from './users'

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT

const app = express()

app.use('/', home)
app.use('/automobiles', automobiles)
app.use('/contracts', contracts)
app.use('/creditCardSystems', creditCardSystems)
app.use('/users', users)

app.listen(port, () => {
  console.log(`oPay API listening on ${host}${port}`)
})