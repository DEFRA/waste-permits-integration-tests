const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CompanyCheckNamePage extends FrontEndPageObject {
  get title () { return 'Is this the right company?' }
  get limitedLiabilityPartnershipTitle () { return 'Is this the right limited liability partnership?' }

  get companyName () { return {css: '#company-name'} }
  get useTradingNameCheckbox () { return {css: '#use-business-trading-name'} }
  get tradingNameInput () { return {css: '#business-trading-name'} }

  async completePage (company, title) {
    const {name, tradingName} = company
    await this.waitForPage(title)
    await this.hasText(this.companyName, name)
    if (tradingName) {
      await this.click(this.useTradingNameCheckbox)
      await this.input(this.tradingNameInput, tradingName)
    }
    return this.click(this.continueButton)
  }
}

module.exports = CompanyCheckNamePage
