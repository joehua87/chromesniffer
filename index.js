var jsdom = require('jsdom');
var detector = require('./detector');

module.exports = function (url, cb) {
  if (typeof cb === 'function') {
    return jsdom.env(
      url,
      function (err, window) {
        if (err) {
          throw err
        }
        var app = detector(window)
        cb(app)
      }
    )
  }

  return new Promise(function(resolve, reject) {
    jsdom.env(
      url,
      function (err, window) {
        if (err) {
          reject(err)
        }
        var app = detector(window)
        resolve(app)
      }
    )
  })
}
