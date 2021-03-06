// TODO: obvs, fix these module imports
import assert from 'assert'


import USERS_DOCUMENT from './documents/users'
import CONTRACTS_DOCUMENT from './documents/contracts'
import AUTOMOBILES_DOCUMENT from './documents/automobiles'
import CREDIT_CARD_SYSTEMS_DOCUMENT from './documents/creditCardSystems'

const MongoDB = require('mongodb')

const { MongoClient } = MongoDB
const dotenv = require('dotenv')

dotenv.config()

const dbName = 'opay'
// TODO: cant auth in
// const dbUser = 'benjo'
// const dbPassword = 'changeToYourPassword'
const port = process.env.PORT
const dbUrl = process.env.DB_BASE_URL
const uri = `${dbUrl}:${port}/${dbName}`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
const client = new MongoClient(uri, options)

client.connect((connectionError: object) => {
  assert.equal(null, connectionError)
  const seedPromises : Promise<any>[] = []
  console.info('You have successfully connected to MongoDB...\n')
  const db = client.db(dbName)

  seedPromises.push(new Promise((resolve, reject) => {
    const collectionName = 'users'
    db.collection(collectionName) // TODO: res needs type
      .insertMany(USERS_DOCUMENT, (err: object, res: any) => {
        if (err) reject(err)
        else resolve({ mongoResult: res.result, collectionName })
      })
  }))

  seedPromises.push(new Promise((resolve, reject) => {
    const collectionName = 'contracts'
    db.collection(collectionName) // TODO: res needs type
      .insertMany(CONTRACTS_DOCUMENT, (err: object, res: any) => {
        if (err) reject(err)
        else resolve({ mongoResult: res.result, collectionName })
      })
  }))

  seedPromises.push(new Promise((resolve, reject) => {
    const collectionName = 'creditCardSystems'
    db.collection(collectionName) // TODO: res needs type
      .insertMany(CREDIT_CARD_SYSTEMS_DOCUMENT, (err: object, res: any) => {
        if (err) reject(err)
        else resolve({ mongoResult: res.result, collectionName })
      })
  }))

  seedPromises.push(new Promise((resolve, reject) => {
    const collectionName = 'automobiles'
    db.collection(collectionName) // TODO: res needs type
      .insertMany(AUTOMOBILES_DOCUMENT, (err: object, res: any) => {
        if (err) reject(err)
        else resolve({ mongoResult: res.result, collectionName })
      })
  }))

  // TODO: handle errors
  Promise.all(seedPromises)
    .then((messages) => {
      messages.forEach((message) => {
        // TODO: implement dynamic plural
        console.info(`${message.mongoResult.n} ${message.collectionName} documents successfully inserted...`)
      })
    })
})
