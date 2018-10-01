const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ApplicationReceivedPage extends FrontEndPageObject {
  get title () { return 'Application received' }

  async completePage (paymentType, title) {
    return this.waitForPage(title || this.title)
  }
}

module.exports = ApplicationReceivedPage
