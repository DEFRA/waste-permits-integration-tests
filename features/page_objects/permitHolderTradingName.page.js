const PageObject = require('./base/PageObject').PageObject

class PermitHolderTradingNamePage extends PageObject {
  get title () { return `Do they do business using their own name or a trading name?` }

  get useTradingNameOnRadio () { return {css: '#use-trading-name-on'} }
  get useTradingNameOffRadio () { return {css: '#use-trading-name-off'} }
  get tradingNameInput () { return {css: '#trading-name'} }

  async completePage ({tradingName}) {
    await this.waitForPage()
    if (tradingName) {
      await this.click(this.useTradingNameOnRadio)
      await this.input(this.tradingNameInput, tradingName)
    } else {
      await this.click(this.useTradingNameOffRadio)
    }
    return this.click(this.continueButton)
  }
}

module.exports = PermitHolderTradingNamePage
