const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class SaveApplicationPage extends FrontEndPageObject {
  get title () { return 'Save your application' }

  get emailInput () { return { css: '#save-and-return-email' } }

  async completePage (email) {
    await this.waitForPage()
    await this.input(this.emailInput, email)
    return this.click(this.continueButton)
  }
}

module.exports = SaveApplicationPage
