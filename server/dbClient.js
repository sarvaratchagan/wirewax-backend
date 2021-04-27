'use strict'

const conf = require('./config')
const MongoClient = require('mongodb').MongoClient
const models = {}
let mongoClient = {}

// Use connect method to connect to the server
MongoClient.connect(conf.mongoUrl).then(client => {
  console.log('DB connected')
  let db = client.db()
  models.grapmarkup = db.collection('grapmarkup')
  mongoClient = client
}).catch(e => {
  console.log('error connecting to db', e)
})

// closing the mongodb clients on sigterm
process.on('SIGINT', () => {
  console.log('Closing the mongodb connections')
  mongoClient.close()
  process.exit(0)
})

module.exports = models
