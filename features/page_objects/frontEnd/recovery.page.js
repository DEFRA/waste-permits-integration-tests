const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class RecoveryPage extends FrontEndPageObject {
  get title () { return 'We found your application' }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = RecoveryPage
