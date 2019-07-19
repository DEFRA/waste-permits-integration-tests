const GovPayPageObject = require('./base/GovPayPageObject').GovPayPageObject

class ConfirmPaymentPage extends GovPayPageObject {
  get title () { return 'Confirm your payment' }
  get confirmPaymentButton () { return { id: 'confirm' } }

  async completePage () {
    await this.waitForPage()
    return this.click(this.confirmPaymentButton)
  }
}

module.exports = ConfirmPaymentPage
