const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class WhatPlansDoWeNeedToAssesPage extends FrontEndPageObject {
  get title () { return 'What plans do we need to assess?' }

  get odourManagementPlanCheckBox () { return { id: 'assessment-1-19-6-input' } }
  get firePreventionPlanCheckBox () { return { id: 'assessment-1-19-3-input' } }
  get dustBioAerosolPlanCheckBox () { return { id: 'assessment-1-19-9-input' } }
  get emissionsManagementPlanCheckBox () { return { id: 'assessment-1-19-5-input' } }
  get habitatAssessmentPlanCheckBox () { return { id: 'assessment-1-19-2-input' } }
  get noiseAndVibrationManagementPlanCheckBox () { return { id: 'assessment-1-19-7-input' } }
  get wasteRecoveryPlanCheckBox () { return { id: 'assessment-1-19-1-input' } }
  get energyEfficiencyReportCheckBox () { return { id: 'assessment-MCP-EER-input' } }
  get bestAvailableTechniquesAssessmentCheckBox () { return { id: 'assessment-MCP-BAT-input' } }

  async completePage () {
    await this.waitForPage()
    await this.click(this.odourManagementPlanCheckBox)
    await this.click(this.firePreventionPlanCheckBox)
    await this.click(this.dustBioAerosolPlanCheckBox)
    await this.click(this.emissionsManagementPlanCheckBox)
    await this.click(this.habitatAssessmentPlanCheckBox)
    await this.click(this.noiseAndVibrationManagementPlanCheckBox)
    await this.click(this.wasteRecoveryPlanCheckBox)
    await this.click(this.energyEfficiencyReportCheckBox)
    await this.click(this.bestAvailableTechniquesAssessmentCheckBox)
    return this.click(this.continueButton)
  }
}

module.exports = WhatPlansDoWeNeedToAssesPage
