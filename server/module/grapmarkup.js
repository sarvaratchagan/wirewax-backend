
const db = require('../dbClient')

function getGraphicsMarkup(f, s, p) {
  return new Promise((resolve, reject) => {
    const sort = {};
    const pipeline = [];
    pipeline.push({ $project : { _id: 0, in_frame : 1, out_frame : 1, content : {value: 1, labels: 1, location: 1} }})
    if (f && f.value) {
      pipeline.push({"$match": {"content.location": {"$in": (f.exact ? [f.value] : [new RegExp(f.value, 'i')]) }}})
    }
    if (s && (s.column && s.type)) {
      sort[s.column] = s.type === 'asc' ? 1 : -1 // asc(1) otherwise desc (-1)
      pipeline.push({ $sort : sort })
    }
    if (p && p.skip) {
      pipeline.push({ $skip: Number(p.skip) })
    }
    if (p &&p.limit) {
      pipeline.push({ $limit: Number(p.limit) })
    }console.log(pipeline);
    db.grapmarkup.aggregate(pipeline).get().then(data => {
      resolve(data);
    }).catch(reject)
  })
}

module.exports = {
  getGraphicsMarkup
};
