const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class StartOrOpenSavedPage extends FrontEndPageObject {
  get title () { return 'Apply for a standard rules environmental permit' }

  get startApplicationRadio () { return { id: 'start-application' } }
  get openApplicationRadio () { return { css: '#open-application' } }

  async completePage () {
    await this.waitForPage()
    await this.click(this.startApplicationRadio)
    return this.click(this.continueButton)
  }
}

module.exports = StartOrOpenSavedPage
