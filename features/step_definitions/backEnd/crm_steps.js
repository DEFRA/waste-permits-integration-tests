const { Given, When } = require('cucumber')
const config = require('../../../config')
const driver = require('../../support/driver')

Given(/^I take screenshots$/, { timeout: 2000000 }, async function () {
  return driver.takeScreenshotsAfterFailure()
})

Given(/^the CRM application has been launched$/, { timeout: 20000000 }, async function () {
  return this.application.launchCRM(this.appConfiguration)
})

When(/^I login as a "(.*)" user$/, { timeout: 20000000 }, async function (user) {
  const { loginPage } = this.pages.backEnd
  switch (user.toLowerCase()) {
    case 'p&sc':
      return loginPage.completePage({ username: config.user1PSCCRM, password: config.pass1PSCCRM })
    default:
      throw new Error(`Todo: Support for "${user}"`)
  }
})

When(/^I open the application$/, { timeout: 20000000 }, async function () {
  const { applicationPage, applicationsListPage, dashboardPage, navigationBarPage } = this.pages.backEnd
  await navigationBarPage.selectDashboard()
  await dashboardPage.selectApplications()
  const { applicationNumber } = this.data
  await applicationsListPage.selectApplication(applicationNumber)
  return applicationPage.withApplication(applicationNumber, async () => {
    return Promise.resolve(true)
  })
})

When(/^the application is created successfully in CRM$/, { timeout: 2000000 }, async function () {
  const { applicationsListPage } = this.pages.backEnd
  const token = await applicationsListPage.getToken()
  const { applicationNumber } = this.data
  await applicationsListPage.retrieveandValidateApplication(applicationNumber, token)
})

When(/^I set the application as "(.*)"$/, async function (applicationNumber) {
  this.data.applicationNumber = applicationNumber
  return Promise.resolve(true)
})

When(/^I (.*) the navigation tour$/, async function (val) {
  if (val.toLowerCase() === 'skip') return

  const { navTourPage } = this.pages.backEnd
  return navTourPage.close()
})
