const PageObject = require('./base/PageObject').PageObject

class CheckCostPage extends PageObject {
  get title () { return 'Costs and processing time' }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = CheckCostPage
