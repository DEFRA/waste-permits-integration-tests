const { Given, When } = require('cucumber')
const path = require('path')
const Tasks = require('../../page_objects/frontEnd/helpers/tasks')
const { email, contact, charity, individual, limitedCompany, limitedLiabilityPartnership, miningWaste, partnership, publicBody, soleTrader, site, invoice, confidentialityNeeds, paymentDetails, aqmaDetails } = require('../../support/testData')

function file (type) {
  return { name: path.join(__dirname, `../../uploadTestFiles/${type}-file-test.${type.toLowerCase()}`) }
}

const CSV = file('CSV')
const DOC = file('DOC')
const DOCX = file('DOCX')
const PDF = file('PDF')
const ODS = file('ODS')
const ODT = file('ODT')
const JPG = file('JPG')
const XLS = file('XLS')
const XLSX = file('XLSX')
const AAI = file('AAI')
const ADI = file('ADI')
const AMI = file('AMI')
const APL = file('APL')
const BPI = file('BPI')
const DEM = file('DEM')
const DIN = file('DIN')
const EMI = file('EMI')
const FAC = file('FAC')
const HRL = file('HRL')
const MET = file('MET')
const PFL = file('PFL')
const ROU = file('ROU')
const RUF = file('RUF')
const SFC = file('SFC')
const TER = file('TER')
const VAR = file('VAR')

Given(/^the application has been launched$/, async function () {
  this.tasks = new Tasks(this)
  return this.application.launch(this.appConfiguration)
})

Given(/^the application has been launched at (.*)$/, async function (path) {
  this.tasks = new Tasks(this)
  return this.application.launch(this.appConfiguration, path)
})

Given(/^I go back to the (.*) page$/, async function (page) {
  const { taskListPage } = this.pages.frontEnd
  return taskListPage.clickBackLink(page)
})

When(/^I start a new (.*) application$/, async function (permitType) {
  this.data.permitType = permitType
  return this.pages.frontEnd.startOrOpenSavedPage.completePage()
})

When(/^I start a new application$/, async function () {
  return this.pages.frontEnd.startOrOpenSavedPage.completePage()
})

When(/^I select all plans to access$/, async function () {
  return this.pages.frontEnd.whatPlansDoWeNeedToAssesPage.completePage()
})

When(/^I confirm activities and assessments$/, async function () {
  return this.pages.frontEnd.confirmActivitiesAndAssessmentsPage.completePageValidation()
})

When(/^I select (.*) as the permit type$/, async function (permitType) {
  if (permitType.toLowerCase() === 'skip') return

  this.data.permitType = permitType
  return this.pages.frontEnd.bespokeOrStandardRulesPage.completePage(permitType)
})

When(/^I select (.*) as the permit category$/, async function (permitCategory) {
  this.data.permitCategory = permitCategory
  return this.pages.frontEnd.permitCategorySelectPage.completePage(permitCategory)
})

When(/^I select (.*) as the type of facility$/, async function (facility) {
  if (facility.toLowerCase() === 'skip') return

  this.data.facility = facility
  return this.pages.frontEnd.facilitySelectPage.completePage(facility)
})

When(/^I select (.*) as the type of MCP$/, async function (selection) {
  if (selection.toLowerCase() === 'skip') return

  this.data.mcpType = selection.toLowerCase()
  return this.pages.frontEnd.mcpTypePage.completePage(this.data.mcpType)
})

When(/^I select (.*) as operating under 500 hours$/, async function (selection) {
  if (selection.toLowerCase() === 'skip') return

  this.data.under500Hours = selection.toLowerCase() === 'yes'
  return this.pages.frontEnd.mcpUnder500HoursPage.completePage(this.data.under500Hours)
})

When(/^I select the following activities I want the permit to cover: (.*)$/, async function (activities) {
  this.data.activities = activities.split(',').map((activity) => activity.trim())
  return this.pages.frontEnd.activitiesSelectPage.completePage(this.data.activities)
})

When(/^I select (.*) as the permit number$/, async function (permitNumber) {
  this.data.permitNumber = permitNumber
  return this.pages.frontEnd.permitNumberSelectPage.completePage(permitNumber)
})


When(/^I select a different permit from the task list page$/, async function () {
  const { taskListPage } = this.pages.frontEnd
  return taskListPage.selectDifferentPermit()
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

When(/^I enter my permit holder details for (.*)$/, async function (permitHolderType) {
  const [ permitHolder, actualPermitHolder ] = permitHolderType.split(':').map((type) => type.trim())
  Object.assign(this.data, { permitHolder, actualPermitHolder })
  return this.tasks.permitHolderDetails(this.data.permitHolder, { charity, individual, limitedCompany, limitedLiabilityPartnership, soleTrader, partnership, publicBody }, this.pages)
})

When(/^I (.*) the waste recovery plan$/, async function (state) {
  if (state.toLowerCase() === 'skip') return

  return this.tasks.wasteRecoveryPlan(state, [DOC, DOCX, PDF, ODT], this.pages)
})

When(/^I (.*) the fire plan$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.firePreventionPlan([DOC, DOCX, PDF, ODS, ODT, JPG], this.pages)
})

When(/^I (.*) the non-technical summary$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.nonTechnicalSummary([PDF, DOC, DOCX, ODT], this.pages)
})

When(/^I (.*) the completed screening tool$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.screeningTool([XLS, XLSX, ODS, PDF], this.pages)
})

When(/^I (.*) the air dispersion modelling report$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.uploadAirDispersionModellingReport([XLS, XLSX, ODS, PDF, AAI, ADI, AMI, APL, BPI, CSV, DEM, DIN, EMI, FAC, HRL, MET, PFL, ROU, RUF, SFC, TER, VAR], this.pages)
})

When(/^I (.*) the energy efficiency report$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.uploadEnergyEfficiencyReport([PDF, DOC, DOCX, ODT], this.pages)
})

When(/^I (.*) the best available techniques assessment$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.uploadBestAvailableTechniquesAssessment([PDF, DOC, DOCX, ODT, JPG], this.pages)
})

When(/^I prove our technical competence as (.*)$/, async function (competence) {
  if (competence.toLowerCase() === 'skip') return

  return this.tasks.proveTechnicalCompetence(competence, [DOC, DOCX, PDF, ODS, ODT, JPG], [DOC, DOCX, PDF, ODT], this.pages)
})

When(/^I (.*) my site name and location$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.siteNameAndLocation(site, this.pages)
})

When(/^I (.*) the site plan$/, async function (confirm) {
  if (confirm.toLowerCase() === 'skip') return

  return this.tasks.sitePlan([PDF, DOC, DOCX, XLS, XLSX, JPG, ODT, ODS], this.pages)
})

When(/^I enter my invoicing details$/, async function () {
  return this.tasks.invoicingDetails(invoice, this.pages)
})

When(/^I confirm my confidentiality needs$/, async function () {
  return this.tasks.confirmConfidentialityNeeds(confidentialityNeeds, this.pages)
})

When(/^I submit my application$/, async function () {
  const { taskListPage } = this.pages.frontEnd
  return taskListPage.click(taskListPage.submitPayLink)
})

  When(/^I check my answers$/, async function () {
    return this.pages.frontEnd.checkBeforeSendingPage.completePage(contact)
  })

When(/^I choose to pay by (.*)$/, async function (paymentType) {
  if (paymentType.toLowerCase() === 'skip') return

  return this.tasks.makePayment(paymentDetails, paymentType, this.pages)
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

When(/^I (.*) the download of the generator list template$/, async function (include) {
  if (include.toLowerCase() === 'skip') return

  return this.tasks.mcpTemplate(this.pages)
})

When(/^I (.*) the upload of the generator list$/, async function (include) {
  if (include.toLowerCase() === 'skip') return

  return this.tasks.mcpDetails([ODS, CSV, XLS, XLSX], this.pages)
})

When(/^I (.*) the business or activity type$/, async function (include) {
  if (include.toLowerCase() === 'skip') return

  return this.tasks.mcpBusinessActivity(this.pages)
})

When(/^I select (.*) as already having an EPR permit$/, async function (selection) {
  if (selection.toLowerCase() === 'skip') return

  this.data.hasEnvironmentalPermit = selection.toLowerCase()
  return this.pages.frontEnd.mcpEprPage.completePage(this.data.hasEnvironmentalPermit)
})

When(/^I select (.*) to provide an air dispersion modelling report$/, async function (selection) {
  if (selection.toLowerCase() === 'skip') return

  this.data.requiresAirDispersionReport = selection.toLowerCase()
  return this.pages.frontEnd.airDispersionReportPage.completePage(this.data.requiresAirDispersionReport)
})

When(/^I confirm my activities and assessments$/, async function () {
  return this.pages.frontEnd.confirmActivitiesAndAssessmentsPage.completePage()
})

When(/^I select (.*) to rated thermal input between 20MW and 50MW and (.*) for where the generator gets it's energy from$/, async function (thermalInput20to50MW, generatorEnergyType) {
  if (thermalInput20to50MW.toLowerCase() === 'skip') return

  this.data.thermalInput20to50MW = thermalInput20to50MW.toLowerCase()
  this.data.generatorEnergyType = generatorEnergyType.toLowerCase()
  return this.pages.frontEnd.thermalInputPage.completePage(this.data.thermalInput20to50MW === 'yes', this.data.generatorEnergyType)
})

When(/^I select (.*) as requiring a habitat assessment$/, async function (selection) {
  if (selection.toLowerCase() === 'skip') return

  this.data.requiresHabitatAssessment = selection.toLowerCase()
  return this.pages.frontEnd.habitatAssessmentPage.completePage(this.data.requiresHabitatAssessment)
})

When(/^I select (.*) to provide an energy efficiency report$/, async function (selection) {
  if (selection.toLowerCase() === 'skip') return

  this.data.requiresEnergyEfficiencyReport = selection.toLowerCase()
  return this.pages.frontEnd.energyEfficiencyReportPage.completePage(this.data.requiresEnergyEfficiencyReport)
})

When(/^I select (.*) to burning waste biomass and (.*) to exceeds 1MW thermal$/, async function (burningWasteBioMass, exceeds1MW) {
  if (burningWasteBioMass.toLowerCase() === 'skip') return

  this.data.burningWasteBioMass = burningWasteBioMass.toLowerCase()
  this.data.exceeds1MW = exceeds1MW.toLowerCase()
  return this.pages.frontEnd.burningWasteBioMassPage.completePage(this.data.burningWasteBioMass, this.data.exceeds1MW)
})

When(/^I (.*) the air quality management area details$/, async function (include) {
  if (include.toLowerCase() === 'skip') return

  return this.tasks.aqmaDetails(true, aqmaDetails, this.pages)
})

When(/^I choose (.*) for the main business activity that the plant or generator is used for$/, async function (naceCode) {
  if (naceCode.toLowerCase() === 'skip') return

  this.data.naceCode = naceCode.toLowerCase()
  return this.tasks.businessActivity(naceCode, this.pages)
})
