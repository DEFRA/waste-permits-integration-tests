const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ApplicationReceivedPage extends FrontEndPageObject {
  get title () { return 'Application received' }

  async completePage (paymentType, title) {
    await this.waitForPage(title || this.title)
    return this.click(this.continueButton)
  }
}

module.exports = ApplicationReceivedPage
