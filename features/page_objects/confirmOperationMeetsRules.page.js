const PageObject = require('./base/PageObject').PageObject

class ConfirmOperationMeetsRulesPage extends PageObject {
  get title () { return 'Confirm your operation meets the rules' }

  get confirmButton () { return {css: '#operation-meets-rules-button'} }

  async completePage () {
    await this.waitForPage()
    return this.click(this.confirmButton)
  }
}

module.exports = ConfirmOperationMeetsRulesPage
