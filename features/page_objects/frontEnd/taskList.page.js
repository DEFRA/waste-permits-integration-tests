const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class TaskListPage extends FrontEndPageObject {
  get title () {
    if (this.data.permitType === 'Bespoke') {
      return 'Apply for a bespoke environmental permit'
    } else {
      return 'Apply for a standard rules environmental permit'
    }
  }

  get backLink () { return { css: '#back-link' } }
  get selectDifferentPermitLink () { return { css: '#select-a-different-permit' } }

  get bespokeTitle () { return 'Apply for a bespoke environmental permit' }

  get checkCostAndProcessingTimeLink () { return { css: '#check-permit-cost-and-time-link' } }
  get checkCostAndProcessingTimeCompleted () { return { css: '#cost-and-time-completed' } }

  get confirmOperationMeetsRulesLink () { return { css: '#confirm-that-your-operation-meets-the-rules-link' } }
  get confirmOperationMeetsRulesCompleted () { return { css: '#operation-rules-completed' } }

  get confirmSuitableVehicleStorageLink () { return { css: '#confirm-the-drainage-system-for-the-vehicle-storage-area-link' } }
  get confirmSuitableVehicleStorageCompleted () { return { css: '#confirm-drainage-completed' } }

  get mcpTemplateLink () { return { css: '#mcp-template-link' } }
  get mcpTemplateCompleted () { return { css: '#mcp-template-completed' } }

  get mcpDetailsLink () { return { css: '#mcp-details-link' } }
  get mcpDetailsCompleted () { return { css: '#mcp-details-completed' } }

  get mcpBusinessActivityLink () { return { css: '#mcp-business-activity-link' } }
  get mcpBusinessActivityCompleted () { return { css: '#business-activity-completed' } }

  get saveApplicationLink () { return { css: '#set-up-save-and-return-link' } }
  get saveApplicationCompleted () { return { css: '#set-up-save-and-return-completed' } }

  get contactDetailsLink () { return { css: '#give-contact-details-link' } }
  get contactDetailsCompleted () { return { css: '#contact-details-completed' } }

  get permitHolderDetailsLink () { return { css: '#give-permit-holder-details-link' } }
  get permitHolderDetailsCompleted () { return { css: '#site-operator-completed' } }

  get firePreventionPlanLink () { return { css: '#upload-the-fire-prevention-plan-link' } }
  get firePreventionPlanCompleted () { return { css: '#firepp-completed' } }

  get wasteRecoveryPlanLink () { return { css: '#waste-recovery-plan-link' } }
  get wasteRecoveryPlanCompleted () { return { css: '#waste-recovery-plan-completed' } }

  get siteNameAndLocationLink () { return { css: '#give-site-name-and-location-link' } }
  get siteNameAndLocationCompleted () { return { css: '#site-name-completed' } }

  get nonTechnicalSummaryLink () { return { css: '#non-technical-summary-link' } }
  get nonTechnicalSummaryCompleted () { return { css: '#non-technical-summary-completed' } }

  get technicalCompetenceLink () { return { css: '#upload-technical-management-qualifications-link' } }
  get technicalCompetenceCompleted () { return { css: '#upload-completed' } }

  get sitePlanLink () { return { css: '#upload-the-site-plan-link' } }
  get sitePlanCompleted () { return { css: '#site-plan-completed' } }

  get uploadAirDispersionModellingReportLink () { return { css: '#upload-air-dispersion-modelling-report-link' } }
  get uploadAirDispersionModellingReportCompleted () { return { css: '#upload-air-dispersion-modelling-report-completed' } }

  get screeningToolLink () { return { css: '#upload-screening-tool-link' } }
  get screeningToolCompleted () { return { css: '#screening-tool-completed' } }

  get uploadEnergyEfficiencyReportLink () { return { css: '#upload-energy-efficiency-report-link' } }
  get uploadEnergyEfficiencyReportCompleted () { return { css: '#upload-energy-efficiency-report-completed' } }

  get uploadBestAvailableTechniquesAssessmentLink () { return { css: '#upload-best-available-techniques-assessment-link' } }
  get uploadBestAvailableTechniquesAssessmentCompleted () { return { css: '#upload-best-available-techniques-assessment-completed' } }

  get invoicingDetailsLink () { return { css: '#invoicing-details-link' } }
  get invoicingDetailsCompleted () { return { css: '#invoicing-details-completed' } }

  get confirmConfidentialityNeedsLink () { return { css: '#confirm-confidentiality-needs-link' } }
  get confirmConfidentialityNeedsCompleted () { return { css: '#confidentiality-completed' } }

  get miningWasteLink () { return { css: '#confirm-mining-data-link' } }
  get miningWasteCompleted () { return { css: '#mining-data-completed' } }

  get aqmaDetailsLink () { return { css: '#air-quality-management-link' } }
  get aqmaDetailsCompleted () { return { css: '#air-quality-management-completed' } }

  get businessActivityLink () { return { css: '#mcp-business-activity-link' } }
  get businessActivityCompleted () { return { css: '#business-activity-completed' } }

  get submitPayLink () { return { css: '#submit-pay-link' } }

  /****************************************************************************/

  async completeTask (name, task) {
    await this.waitForPage()
    await this.isAbsent(this[`${name}Completed`])
    await this.click(this[`${name}Link`])

    const taskComplete = Boolean(await task())

    if (taskComplete) {
      // Only return to the task list when the task is complete
      await this.waitForPage()
      return this.hasText(this[`${name}Completed`], 'COMPLETED')
    }
  }

  async doNotCompleteTask (name, task) {
    await this.waitForPage()
    // await this.isAbsent(this[`${name}Completed`])
    await this.click(this[`${name}Link`])

    const taskComplete = Boolean(await task())

    if (taskComplete) {
      // Only return to the task list when the task is complete
      await this.waitForPage()
      return this.hasText(this[`${name}Completed`], 'COMPLETED')
    }
  }


  async selectTask (link) {
    await this.waitForPage()
    await this.click(link)
  }

  async selectDifferentPermit () {
    const selectdiffPermit = await this.selectDifferentPermitLink
    await this.hasText(selectdiffPermit, 'Select a different permit')
    return this.click(selectdiffPermit)
  }

  async clickBackLink (title) {
    const backlink = await this.backLink
    await this.hasText(backlink, 'Back')
    await this.click(backlink) 
    return await this.waitForPage(title)
  }
}

module.exports = TaskListPage
