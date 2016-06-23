var chai = require('chai')
var expect = chai.expect
var detectSite = require('../index')

var siteToTest = 'https://authoritynutrition.com/'

describe('Site Detector', () => {
  it('Work with callback', (done) => {
    detectSite(siteToTest, (app) => {
      expect(app.WordPress).to.match(/^4./)
      done()
    })
  })

  it('Work with Promise', function (done) {
    detectSite(siteToTest)
      .then((app) => {
        expect(app.WordPress).to.match(/^4./)
        done()
      })
  })
})
