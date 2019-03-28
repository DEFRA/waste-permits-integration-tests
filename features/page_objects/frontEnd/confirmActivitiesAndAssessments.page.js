const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ConfirmActivitiesAndAssessmentsPage extends FrontEndPageObject {
  get title () { return 'Confirm activities and assessments' }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = ConfirmActivitiesAndAssessmentsPage
