const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class McpBusinessActivityPage extends FrontEndPageObject {
  get title () { return 'What is the NACE code for the main business activity that the plant is used for?' }

  get electricityRadio () { return { css: '#type-codes-option-35-11' } }

  async completePage () {
    await this.waitForPage()
    await this.click(this.electricityRadio)
    return this.click(this.continueButton)
  }
}

module.exports = McpBusinessActivityPage
