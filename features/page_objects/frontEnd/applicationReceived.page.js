const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ApplicationReceivedPage extends FrontEndPageObject {
  get title () { return 'Application received' }
  get paymentTitle () { return 'Application and card payment received' }
  get applicationNumber () { return { css: '#application-name' } }

  async completePage (paymentType) {
    switch (paymentType.toLowerCase()) {
      case 'bacs':
        await this.waitForPage()
        break
      case 'card':
        await this.waitForPage(this.paymentTitle)
        break
      default:
        throw new Error(`unknown payment type: ${paymentType}`)
    }
    this.data.applicationNumber = await this.getText(this.applicationNumber)
    this.log(this.data.applicationNumber)
    return Promise.resolve(true)
  }
}

module.exports = ApplicationReceivedPage
