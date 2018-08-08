const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ConvictionsPage extends FrontEndPageObject {
  get title () { return 'Does anyone connected with your business have a conviction for a relevant offence?' }

  get declaredRadio () { return {css: '#declared'} }
  get declaredDetailsInput () { return {css: '#declaration-details'} }
  get noneDeclaredRadio () { return {css: '#none-declared'} }

  async completePage (details) {
    await this.waitForPage()
    if (details) {
      await this.click(this.declaredRadio)
      await this.input(this.declaredDetailsInput, details)
    } else {
      await this.click(this.noneDeclaredRadio)
    }
    return this.click(this.continueButton)
  }
}

module.exports = ConvictionsPage
