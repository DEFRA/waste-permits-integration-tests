const PageObject = require('./base/PageObject').PageObject

class StartOrOpenSavedPage extends PageObject {
  get title () { return 'Apply for a standard rules environmental permit' }

  get startApplicationRadio () { return {css: '#start-application'} }
  get openApplicationRadio () { return {css: '#open-application'} }

  async completePage () {
    await this.waitForPage()
    await this.click(this.startApplicationRadio)
    return this.click(this.continueButton)
  }
}

module.exports = StartOrOpenSavedPage
