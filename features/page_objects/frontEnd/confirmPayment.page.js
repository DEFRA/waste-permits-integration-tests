const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ConfirmPaymentPage extends FrontEndPageObject {
  get title () { return 'Confirm your payment' }
  get confirmPaymentButton () { return {id: 'confirm'} }
  
  async completePage (title) {
    await this.waitForGovUKPage(title)
    return this.click(this.confirmPaymentButton)
  }
}

module.exports = ConfirmPaymentPage