const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PermitCategorySelectPage extends FrontEndPageObject {
  get title () { return 'Select a permit' }

  permit (permitNumber) {
    const id = `chosen-permit-${permitNumber.replace(/\s+/g, '-').toLowerCase()}-input`
    return {css: `#${id}`}
  }

  async completePage (permitNumber) {
    await this.waitForPage()
    await this.click(this.permit(permitNumber))
    return this.click(this.continueButton)
  }
}

module.exports = PermitCategorySelectPage
