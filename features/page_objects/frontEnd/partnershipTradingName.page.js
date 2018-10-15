const TradingNamePageObject = require('./base/TradingNamePageObject').TradingNamePageObject

class PartnershipTradingNamePage extends TradingNamePageObject {
  get title () { return 'What name do you use for the partnership?' }
}

module.exports = PartnershipTradingNamePage
