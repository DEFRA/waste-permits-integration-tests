const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PaymentTypePage extends FrontEndPageObject {
  get title () { return 'How do you want to pay?' }

  get bacsPaymentRadio () { return { css: '#bacs-payment' } }
  get cardPaymentRadio () { return { css: '#card-payment' } }

  async completePage (paymentType) {
    await this.waitForPage()
    await this.click(this[`${paymentType.toLowerCase()}PaymentRadio`])
    return this.click(this.continueButton)
  }
}

module.exports = PaymentTypePage
