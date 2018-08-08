const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class MakeSureEmailIsRightPage extends FrontEndPageObject {
  get title () { return 'Make sure this is right' }

  get emailInput () { return {css: '#save-and-return-email'} }

  async completePage (email) {
    await this.waitForPage()
    await this.hasValue(this.emailInput, email)
    return this.click(this.continueButton)
  }
}

module.exports = MakeSureEmailIsRightPage
