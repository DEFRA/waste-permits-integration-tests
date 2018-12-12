var {defineSupportCode} = require('cucumber')
var path = require('path')
const Tasks = require('../page_objects/frontEnd/helpers/tasks')
const {email, contact, individual, limitedCompany, limitedLiabilityPartnership, miningWaste, partnership, publicBody, soleTrader, site, invoice, confidentialityNeeds, validCardDetails} = require('../support/testData')

function file (filename) {
  return path.join(__dirname, `../uploadTestFiles/${filename}`)
}

const validFirePreventionPlanFiles = [
  {name: file('DOC-file-test.doc')},
  {name: file('DOCX-file-test.docx')},
  {name: file('PDF-file-test.pdf')},
  {name: file('ODS-file-test.ods')},
  {name: file('ODT-file-test.odt')},
  {name: file('JPG-file-test.jpg')}
]

const validSitePlanFiles = [
  {name: file('DOC-file-test.doc')},
  {name: file('DOCX-file-test.docx')},
  {name: file('PDF-file-test.pdf')},
  {name: file('ODS-file-test.ods')},
  {name: file('ODT-file-test.odt')},
  {name: file('JPG-file-test.jpg')}
]

const validTechnicalQualificationFiles = [
  {name: file('DOC-file-test.doc')},
  {name: file('DOCX-file-test.docx')},
  {name: file('PDF-file-test.pdf')},
  {name: file('ODS-file-test.ods')},
  {name: file('ODT-file-test.odt')},
  {name: file('JPG-file-test.jpg')}
]

const validTechnicalManagerFiles = [
  {name: file('DOC-file-test.doc')},
  {name: file('DOCX-file-test.docx')},
  {name: file('PDF-file-test.pdf')},
  {name: file('ODT-file-test.odt')}
]

const validWasteRecoveryPlanFiles = [
  {name: file('DOC-file-test.doc')},
  {name: file('DOCX-file-test.docx')},
  {name: file('PDF-file-test.pdf')},
  {name: file('ODT-file-test.odt')}
]

defineSupportCode(function ({Given, When}) {
  Given(/^the application has been launched$/, async function () {
    this.tasks = new Tasks(this)
    return this.application.launch(this.appConfiguration)
  })

  When(/^I start a new application$/, async function () {
    return this.pages.frontEnd.startOrOpenSavedPage.completePage()
  })

  When(/^I select (.*) as the permit type$/, async function (permitType) {
    this.data.permitType = permitType
    return this.pages.frontEnd.bespokeOrStandardRulesPage.completePage(permitType)
  })

  When(/^I select (.*) as the permit holder$/, async function (permitHolder) {
    this.data.permitHolder = permitHolder
    return this.pages.frontEnd.permitHolderSelectPage.completePage(permitHolder)
  })

  When(/^I select (.*) as the permit category$/, async function (permitCategory) {
    this.data.permitCategory = permitCategory
    return this.pages.frontEnd.permitCategorySelectPage.completePage(permitCategory)
  })

  When(/^I select (.*) as the permit number$/, async function (permitNumber) {
    this.data.permitNumber = permitNumber
    return this.pages.frontEnd.permitNumberSelectPage.completePage(permitNumber)
  })

  When(/^I check costs$/, async function () {
    return this.tasks.checkCostAndProcessingTime(this.pages)
  })

  When(/^I check (.*) on Cost and processing time page$/, async function (cost) {
    return this.tasks.checkCostAndProcessingTimeValidations(cost, this.pages)
  })

  When(/^I confirm I meet the rules$/, async function () {
    return this.tasks.confirmOperationMeetsRules(this.pages)
  })

  When(/^I confirm I meet the rules (.*)$/, async function (link) {
    return this.tasks.confirmOperationMeetsRulesValidation(link, this.pages)
  })

  When(/^I confirm my vehicle storage area (.*)$/, async function (vehicleStorage) {
    if (vehicleStorage.toLowerCase() === 'is not required') return

    this.data.vehicleStorage = vehicleStorage
    return this.tasks.confirmSuitableVehicleStorage(vehicleStorage, this.pages)
  })

  When(/^I save my application$/, async function () {
    return this.tasks.saveApplication(email, this.pages)
  })

  When(/^I enter my contact details$/, async function () {
    return this.tasks.contactDetails(contact, this.pages)
  })

  When(/^I enter my permit holder details$/, async function () {
    return this.tasks.permitHolderDetails(this.data.permitHolder, {individual, limitedCompany, limitedLiabilityPartnership, soleTrader, partnership, publicBody}, this.pages)
  })

  When(/^I (.*) the waste recovery plan$/, async function (state) {
    if (state.toLowerCase() === 'skip') return

    return this.tasks.wasteRecoveryPlan(state, validWasteRecoveryPlanFiles, this.pages)
  })

  When(/^I (.*) the fire plan$/, async function (confirm) {
    if (confirm.toLowerCase() === 'skip') return

    return this.tasks.firePreventionPlan(validFirePreventionPlanFiles, this.pages)
  })

  When(/^I prove our technical competence as (.*)$/, async function (competence) {
    if (competence.toLowerCase() === 'skip') return

    return this.tasks.proveTechnicalCompetence(competence, validTechnicalQualificationFiles, validTechnicalManagerFiles, this.pages)
  })

  When(/^I (.*) my site name and location$/, async function (confirm) {
    if (confirm.toLowerCase() === 'skip') return

    return this.tasks.siteNameAndLocation(site, this.pages)
  })

  When(/^I (.*) the site plan$/, async function (confirm) {
    if (confirm.toLowerCase() === 'skip') return

    return this.tasks.sitePlan(validSitePlanFiles, this.pages)
  })

  When(/^I enter my invoicing details$/, async function () {
    return this.tasks.invoicingDetails(invoice, this.pages)
  })

  When(/^I confirm my confidentiality needs$/, async function () {
    return this.tasks.confirmConfidentialityNeeds(confidentialityNeeds, this.pages)
  })

  When(/^I submit my application$/, async function () {
    const {taskListPage} = this.pages.frontEnd
    return taskListPage.click(taskListPage.submitPayLink)
  })

  When(/^I check my answers$/, async function () {
    return this.pages.frontEnd.checkBeforeSendingPage.completePage()
  })

  When(/^I choose to pay by (.*)$/, async function (paymentType) {
    if (paymentType.toLowerCase() === 'skip') return

    return this.tasks.makePayment(validCardDetails, paymentType, this.pages)
  })

  When(/^I (.*) confirmation of mining waste weight$/, async function (confirm) {
    if (confirm.toLowerCase() === 'skip') return

    return this.tasks.confirmMiningWaste(miningWaste, this.pages)
  })

  When(/^I am on (.*) apply offline page with (.*) link$/, async function (header, link) {
    return this.pages.frontEnd.offlineApplyPage.completePage(header, link)
  })

  When(/^I will (.*) each address$/, async function (addressEntryMethod) {
    return Promise.resolve(this.data.selectAddress = addressEntryMethod.toLowerCase() === 'select')
  })
})
