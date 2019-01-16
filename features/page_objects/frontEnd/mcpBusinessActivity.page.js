const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class McpBusinessActivityPage extends FrontEndPageObject {
  get title () { return 'What is the main type of business or activity the plant is used for?' }

  get electricityRadio () { return {css: '#type-codes-option-d-35'} }

  async completePage () {
    await this.waitForPage()
    await this.click(this.electricityRadio)
    return this.click(this.continueButton)
  }
}

module.exports = McpBusinessActivityPage
