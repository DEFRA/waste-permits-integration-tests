const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ConfirmOperationMeetsRulesPage extends FrontEndPageObject {
  get title () { return 'Confirm your operation meets the rules' }

  get confirmButton () { return { className: 'button' } }
  get standardRulesLink () { return { css: '#standard-rule-link' } }

  async completePage () {
    await this.waitForPage()
    return this.click(this.confirmButton)
  }

  async completePageValidation (link) {
    await this.waitForPage()
    await this.haslink(this.standardRulesLink, link)
    return this.click(this.confirmButton)
  }
}

module.exports = ConfirmOperationMeetsRulesPage
