const MongoClient = require('mongodb').MongoClient
import assert = require('assert')
import dotenv from 'dotenv'

dotenv.config()

const COLLECTIONS = [
  'users',
  'contracts',
  'creditCardSystems',
  'automobiles'
]

const dbName = 'opay'
const port = process.env.PORT
const dbUrl = process.env.DB_BASE_URL
const uri = `${dbUrl}:${port}/${dbName}`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
const client = new MongoClient(uri, options)

client.connect((err: object) => {
  assert.equal(null, err)
  const deletePromises: Promise<any>[] = []
  console.log('You have successfully connected to MongoDB...\n')
  const db = client.db(dbName)

  for (let ii=0; ii<COLLECTIONS.length; ii++) {
    deletePromises.push(new Promise((resolve, reject) => {
      db.collection(COLLECTIONS[ii])
        .deleteMany({}, (err: object, res: any) => {
          if (err) reject(err) // TODO: res needs type
          else resolve({ mongoResult: res['result'], collectionName: COLLECTIONS[ii] })
        })
    })
    )
  }

  Promise.all(deletePromises)
    .then(messages => {
      messages.forEach(message => {
        console.log(`${message.mongoResult.n} ${message.collectionName} documents successfully deleted...`)
      })
    })
})