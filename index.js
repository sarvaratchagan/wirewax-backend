// setting up the server

'use strict'
const http = require('http')
const express = require('express')
const app = express()

// -- vars
const conf = require('./server/config')
const error = require('./server/module/error').error
let server = http.createServer(app)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('X-Frame-Options', 'DENY')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Vary', 'Accept-Encoding')

  if (req.method && req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use('/graphic', require('./server/routes.markups.js'))

app.get('*', (req, res) => error(res))

server.listen(conf.port)
console.log(`Wirewax Backend server started on port: ${conf.port} env: ${conf.envMode}`)
