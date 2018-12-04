const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ApplicationReceivedPage extends FrontEndPageObject {
  get title () { return 'Application received' }
  get paymentTitle () { return 'Application and card payment received' }
  get applicationNumber () { return {css: '#application-name'} }

  async completePage (paymentType, title, paymentTitle) {
    switch (paymentType.toLowerCase()) {
      case 'bacs':
        await this.waitForPage(title)
        const appNo = await this.getText(this.applicationNumber)
        const {application} = require('../../support/testData')
        application['applicationNo'] = appNo
        console.log(application['applicationNo'])
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
