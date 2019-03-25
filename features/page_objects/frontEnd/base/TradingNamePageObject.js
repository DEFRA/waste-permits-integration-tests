const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class TradingNamePageObject extends FrontEndPageObject {
  get tradingNameInput () { return { css: '#trading-name' } }

  /****************************************************************************/

  async completePage ({ tradingName }, title) {
    await this.waitForPage(title)
    await this.input(this.tradingNameInput, tradingName)
    return this.click(this.continueButton)
  }
}

module.exports = { TradingNamePageObject }
