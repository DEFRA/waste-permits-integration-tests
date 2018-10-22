const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ApplicationReceivedPage extends FrontEndPageObject {
  get title () { return 'Application received' }
  get paymentTitle () { return 'Application and card payment received'}

  async completePage (paymentType, title,paymentTitle) {
    switch (paymentType.toLowerCase()) {
      case 'bacs':
      await this.waitForPage(title)
        break
      case 'card':
        await this.waitForPaymentCompletionPage(paymentTitle) 
        break
      default:
        throw new Error(`unknown payment type: ${paymentType}`)
    }
  }
}

module.exports = ApplicationReceivedPage
