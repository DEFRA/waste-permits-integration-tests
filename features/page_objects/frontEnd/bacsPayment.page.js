const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class BacsPaymentPage extends FrontEndPageObject {
  get title () { return 'You have chosen to pay by bank transfer using Bacs' }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = BacsPaymentPage
