const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CheckCostPage extends FrontEndPageObject {
  get title () { return 'Costs and processing time' }
  get costText () { return {id: 'cost'} }
  get timeToWaitAfterApplyingText () { return {id: 'length-of-time-text'} }


  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }

  async completePageValidation (cost) {
    await this.waitForPage()
    await this.hasText(this.costText, cost)
    await this.hasText(this.timeToWaitAfterApplyingText, 'up to 13 weeks')
    return this.click(this.continueButton)
  }
}

module.exports = CheckCostPage
