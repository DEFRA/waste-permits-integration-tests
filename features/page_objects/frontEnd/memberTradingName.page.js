const TradingNamePageObject = require('./base/TradingNamePageObject').TradingNamePageObject

class MemberTradingNamePage extends TradingNamePageObject {
  get title () { return 'What name do you use for the partnership?' }
  get groupTitle () { return 'What is the name of the organisation or group?' }
}

module.exports = MemberTradingNamePage
