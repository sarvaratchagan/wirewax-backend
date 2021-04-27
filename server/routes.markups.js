'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const auth = require('./module/auth')
const markups  = require('./controller/markups')
const error = require('./module/error').error
const middleware = require('./middleware/middleware')
const schemas = require('./schemas/schemas')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))

function extractToken (req) {
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    return req.headers.authorization.substring(7);
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}


router.use((req, res, next) => {
  const token = extractToken(req)
  if (req.method && req.method === 'POST' && token) {
    if (token) {
      auth.checkToken(token).then(userId => {
        // req.body.userId = userId // use this field once you enabled auth in this application
        next()
      }).catch(() => error(res, 'Unauthorized', 403))
    } else {
      return error(res, 'Unauthorized', 403)
    }
  } else {
    return error(res, 'Unauthorized', 403)
  }
})

router.post('/markups', middleware(schemas.markups), markups.getGraphicsMarkup)


module.exports = router
