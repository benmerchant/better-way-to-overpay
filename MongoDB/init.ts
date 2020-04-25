const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

import USERS_DOCUMENT from './documents/users'
import CONTRACTS_DOCUMENT from './documents/contracts'
import AUTOMOBILES_DOCUMENT from './documents/automobiles'
import CREDIT_CARD_SYSTEMS_DOCUMENT from './documents/creditCardSystems'

const dbName = 'opay'
// TODO: cant auth in
// const dbUser = 'benjo'
// const dbPassword = 'changeToYourPassword'
const port = 27017
const host = '127.0.0.1'
const uri = `mongodb://${host}:${port}/${dbName}`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
const client = new MongoClient(uri, options)

client.connect(err => {
  assert.equal(null,err)
  console.log('connected to MongoDB...')

  const db = client.db(dbName)

  db.collection('users').insertOne(USERS_DOCUMENT[0], (err, res) => {
    assert.equal(null,err)
    console.log(`inserted 1 document`)
    db.collection('contracts').insertOne(CONTRACTS_DOCUMENT[0], (err, res) => {
      assert.equal(null, err)
      console.log(`inserted 1 document`)
      db.collection('automobiles').insertOne(AUTOMOBILES_DOCUMENT[0], (err, res) => {
        assert.equal(null, err)
        console.log(`inserted 1 document`)
        db.collection('creditCardSystems').insertOne(CREDIT_CARD_SYSTEMS_DOCUMENT[0], (err, res) => {
          assert.equal(null, err)
          console.log(`inserted 1 document`)
          client.close()
        })
      })
    })
    
  })

  
  
})
