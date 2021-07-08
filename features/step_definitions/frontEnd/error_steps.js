const { When } = require('@cucumber/cucumber')
// var path = require('path')
// const tasks = require('../page_objects/helpers/tasks')
// const {email, contact, individual, limitedCompany, limitedLiabilityPartnership, soleTrader, site, invoice, confidentialityNeeds} = require('../support/testData')

When(/^I should see an error "(.*)"$/, async function (message) {
  const { permitHolderSelectPage } = this.pages.frontEnd
  return permitHolderSelectPage.checkError(message)
})

// I enter a contact with <Field> set to <Value>
When(/^I enter a contact with (.*) set to "(.*)"$/, async function (field, value) {
  const { taskListPage, contactDetailsPage } = this.pages.frontEnd
  await taskListPage.selectTask(taskListPage.contactDetailsLink)
  const { contact } = require('../../support/testData')
  contact[field] = value
  return contactDetailsPage.completePage(contact)
})
