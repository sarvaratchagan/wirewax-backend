'use strict'

const markupsModule = require('../module/grapmarkup')
const error = require('../module/error').error

function getGraphicsMarkup(req, res) {
  let filter = req.body.filter;
  let sort = req.body.sort;
  let paginate = {};
  if (req.query.limit && req.query.skip) {
    paginate.limit = req.query.limit;
    paginate.skip = req.query.skip;
  }
  markupsModule.getGraphicsMarkup(filter, sort, paginate).then(data => {
    res.json(data)
  }).catch(e => {
    console.log(e);
    return error(res, 'Error getting graphics markups for this request', 404, e)
  })
}

module.exports = {
  getGraphicsMarkup
}
