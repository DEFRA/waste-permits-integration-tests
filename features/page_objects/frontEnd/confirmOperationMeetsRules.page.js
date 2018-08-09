const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ConfirmOperationMeetsRulesPage extends FrontEndPageObject {
  get title () { return 'Confirm your operation meets the rules' }

  get confirmButton () { return {css: '#operation-meets-rules-button'} }

  async completePage () {
    await this.waitForPage()
    return this.click(this.confirmButton)
  }
}

module.exports = ConfirmOperationMeetsRulesPage
