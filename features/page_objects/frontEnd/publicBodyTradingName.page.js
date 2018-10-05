const TradingNamePageObject = require('./base/TradingNamePageObject').TradingNamePageObject

class PublicBodyTradingNamePage extends TradingNamePageObject {
  get title () { return 'What is the name of the local authority or public body?' }
}

module.exports = PublicBodyTradingNamePage
