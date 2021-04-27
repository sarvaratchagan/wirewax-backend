const path = require('path')

const conf = {
  port: process.env.PORT || 8080,
  envMode: process.env.mode || 'dev',
  mongoUrl: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/wirewax',
}

module.exports = conf
