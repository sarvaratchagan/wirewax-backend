'use strict'

function error(res, message, code, extra) {
  code = code || 404
  let error = {
    status: code,
    errorMessage: message || 'Not found',
    e: extra || {}
  }
  if (res) {
    return res.status(code).json(error)
  } else {
    console.log('No res object in error call')
    return false
  }
}

module.exports = {
  error
}
