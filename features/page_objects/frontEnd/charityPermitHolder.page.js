const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CharityPermitHolderPage extends FrontEndPageObject {
  get title () { return 'Choose the permit holder for the charity or trust' }

  get limitedCompanyRadio () { return {css: '#registered-company-type'} }
  get individualRadio () { return {css: '#individual-type'} }
  get publicBodyRadio () { return {css: '#legal-body-type'} }

  /****************************************************************************/

  async completePage () {
    await this.waitForPage()
    switch (this.data.actualPermitHolder.toLowerCase()) {
      case 'limited company':
        this.click(this.limitedCompanyRadio)
        break
      case 'public body':
        this.click(this.publicBodyRadio)
        break
      case 'individual':
        this.click(this.individualRadio)
        break
      default:
        throw new Error(`Todo: Support for "${this.data.actualPermitHolder}"`)
    }
    return this.click(this.continueButton)
  }
}

module.exports = CharityPermitHolderPage
