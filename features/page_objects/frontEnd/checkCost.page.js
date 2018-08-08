const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CheckCostPage extends FrontEndPageObject {
  get title () { return 'Costs and processing time' }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = CheckCostPage
