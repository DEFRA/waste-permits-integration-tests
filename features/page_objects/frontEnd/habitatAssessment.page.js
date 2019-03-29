const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class HabitatAssessmentPage extends FrontEndPageObject {
  get title () { return 'Do you need a habitat assessment?' }
  get 'habitat-assessment-no' () { return { css: '#habitat-assessment-no' } }
  get 'habitat-assessment-yes' () { return { css: '#habitat-assessment-yes' } }

  async completePage (hasHabitatAssessment) {
    await this.waitForPage()
    await this.click(this[`habitat-assessment-${hasHabitatAssessment}`])
    return this.click(this.continueButton)
  }
}

module.exports = HabitatAssessmentPage
