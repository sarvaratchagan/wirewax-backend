module.exports = {
  "env": {
    "node": true,
    "mocha": true,
  },
  "plugins": [
    "mocha"
  ],
  "extends": "standard",
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "camelcase": 0,
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "prefer-promise-reject-errors": ["error", {
      "allowEmptyReject": true
    }]
  }
};
