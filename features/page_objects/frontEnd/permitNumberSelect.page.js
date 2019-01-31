const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PermitNumberSelectPage extends FrontEndPageObject {
  get title () { return 'Select a permit' }

  permit (permitNumber) {
    return {css: `input[data-code="${permitNumber}"]`}
  }

  async completePage (permitNumber) {
    await this.waitForPage()
    await this.click(this.permit(permitNumber))
    return this.click(this.continueButton)
  }
}

module.exports = PermitNumberSelectPage
