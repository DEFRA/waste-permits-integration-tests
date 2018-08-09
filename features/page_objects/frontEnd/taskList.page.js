const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class TaskListPage extends FrontEndPageObject {
  get title () { return 'Apply for a standard rules environmental permit' }

  get checkCostAndProcessingTimeLink () { return {css: '#check-permit-cost-and-time-link'} }
  get checkCostAndProcessingTimeCompleted () { return {css: '#cost-and-time-completed'} }

  get confirmOperationMeetsRulesLink () { return {css: '#confirm-that-your-operation-meets-the-rules-link'} }
  get confirmOperationMeetsRulesCompleted () { return {css: '#operation-rules-completed'} }

  get confirmSuitableVehicleStorageLink () { return {css: '#confirm-the-drainage-system-for-the-vehicle-storage-area-link'} }
  get confirmSuitableVehicleStorageCompleted () { return {css: '#confirm-drainage-completed'} }

  get saveApplicationLink () { return {css: '#set-up-save-and-return-link'} }
  get saveApplicationCompleted () { return {css: '#set-up-save-and-return-completed'} }

  get contactDetailsLink () { return {css: '#give-contact-details-link'} }
  get contactDetailsCompleted () { return {css: '#contact-details-completed'} }

  get permitHolderDetailsLink () { return {css: '#give-permit-holder-details-link'} }
  get permitHolderDetailsCompleted () { return {css: '#site-operator-completed'} }

  get firePreventionPlanLink () { return {css: '#upload-the-fire-prevention-plan-link'} }
  get firePreventionPlanCompleted () { return {css: '#firepp-completed'} }

  get wasteRecoveryPlanLink () { return {css: '#waste-recovery-plan-link'} }
  get wasteRecoveryPlanCompleted () { return {css: '#waste-recovery-plan-completed'} }

  get siteNameAndLocationLink () { return {css: '#give-site-name-and-location-link'} }
  get siteNameAndLocationCompleted () { return {css: '#site-name-completed'} }

  get technicalCompetenceLink () { return {css: '#upload-technical-management-qualifications-link'} }
  get technicalCompetenceCompleted () { return {css: '#upload-completed'} }

  get sitePlanLink () { return {css: '#upload-the-site-plan-link'} }
  get sitePlanCompleted () { return {css: '#site-plan-completed'} }

  get invoicingDetailsLink () { return {css: '#invoicing-details-link'} }
  get invoicingDetailsCompleted () { return {css: '#invoicing-details-completed'} }

  get confirmConfidentialityNeedsLink () { return {css: '#confirm-confidentiality-needs-link'} }
  get confirmConfidentialityNeedsCompleted () { return {css: '#confidentiality-completed'} }

  get submitPayLink () { return {css: '#submit-pay-link'} }

  async completeTask (name, task) {
    await this.waitForPage()
    await this.click(this[`${name}Link`])

    await task()

    await this.waitForPage()
    return this.hasText(this[`${name}Completed`], 'COMPLETED')
  }

  async selectTask (link) {
    await this.waitForPage()
    await this.click(link)
  }
}

module.exports = TaskListPage
