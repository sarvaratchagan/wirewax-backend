'use strict'

let tokenCache = {}

// testing
if (process.env.mode !== 'prod') {
  tokenCache['eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMyIsImlhdCI6MTYxMTg0MDU2MSwiZXhwIjoxNjExOTI2OTYxfQ.1ev_zYNfVRi_rqXOdzfgLR2EHQiOFB4Iveo3rQha4ASlDyeHI27UEKd6XaYdSgWkgzDxscMMqnB23vEf0wAIow'] = '6086ff597ed2010d764cd040'
}

function checkToken(token) {
  return new Promise((resolve, reject) => {
    if (tokenCache[token]) { // cache the token uid so we don't need to check every time
      resolve(tokenCache[token])
    } else {
      // get token from your db and set
    }
  })
}

module.exports = {
  checkToken
}
