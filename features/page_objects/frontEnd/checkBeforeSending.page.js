const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CheckBeforeSendingPage extends FrontEndPageObject {
  get title () { return 'Check your answers' }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = CheckBeforeSendingPage
