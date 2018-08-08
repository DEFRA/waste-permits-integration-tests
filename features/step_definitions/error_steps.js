var {defineSupportCode} = require('cucumber')
// var path = require('path')
// const tasks = require('../page_objects/helpers/tasks')
// const {email, contact, individual, limitedCompany, limitedLiabilityPartnership, soleTrader, site, invoice, confidentialityNeeds} = require('../support/testData')

defineSupportCode(function ({Given, When}) {
  When(/^I should see an error "(.*?)"$/, async function (message) {
    const {permitHolderSelectPage} = this.pages
    return permitHolderSelectPage.checkError(message)
  })
})
