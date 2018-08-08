const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CompanyNumberPage extends FrontEndPageObject {
  get title () { return 'What is the UK company registration number?' }
  get limitedLiabilityPartnershipTitle () { return 'What is the company number for the limited liability partnership?' }

  get companyNumberInput () { return {css: '#company-number'} }

  async completePage (companyNumber, title) {
    await this.waitForPage(title)
    await this.input(this.companyNumberInput, companyNumber)
    return this.click(this.continueButton)
  }
}

module.exports = CompanyNumberPage
