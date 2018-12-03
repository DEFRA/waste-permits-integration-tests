const {defineSupportCode} = require('cucumber')
const config = require('../../config')
const Tasks = require('../page_objects/frontEnd/helpers/tasks')
const {email, contact, partnership} = require('../support/testData')

defineSupportCode(function ({When}) {
  When(/^As a (.*) I apply for waste permit (.*) \((.*)\)$/, async function (permitHolder, permitNumber, permitCategory) {
    const {
      startOrOpenSavedPage,
      bespokeOrStandardRulesPage,
      permitHolderSelectPage,
      permitCategorySelectPage,
      permitNumberSelectPage
    } = this.pages.frontEnd

    const tasks = this.tasks = new Tasks(this)

    await this.application.launch(this.appConfiguration)

    // Start Application
    await startOrOpenSavedPage.completePage()
    await bespokeOrStandardRulesPage.completePage('Standard rules')

    // Select Permit
    await permitHolderSelectPage.completePage(permitHolder)
    await permitCategorySelectPage.completePage(permitCategory)
    await permitNumberSelectPage.completePage(permitNumber)

    // Complete "Before you apply" Tasks
    await tasks.checkCostAndProcessingTime(this.pages)
    await tasks.confirmOperationMeetsRules(this.pages)
    await tasks.saveApplication(email, this.pages)

    // Complete "Before you apply" Tasks
    await tasks.contactDetails(contact, this.pages)
    await tasks.partnershipPermitHolderDetails(partnership, this.pages)
  })

  When(/^I recover my application with the recovery code: (.*)$/, async function (slug) {
    const {recoveryPage} = this.pages.frontEnd
    await this.application.browser.get(`${config.appUrl}/r/${slug}`)
    await recoveryPage.completePage()
  })
})
