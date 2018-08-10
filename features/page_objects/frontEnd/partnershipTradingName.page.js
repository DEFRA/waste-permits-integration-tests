const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PartnershipTradingNamePage extends FrontEndPageObject {
  get title () { return 'What name do you use for the partnership?' }

  get tradingNameInput () { return {css: '#trading-name'} }

  async completePage ({tradingName}) {
    await this.waitForPage()
    await this.input(this.tradingNameInput, tradingName)
    return this.click(this.continueButton)
  }
}

module.exports = PartnershipTradingNamePage
