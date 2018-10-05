const DeclarationsPageObject = require('./base/DeclarationsPageObject').DeclarationsPageObject

class BankruptcyPage extends DeclarationsPageObject {
  get title () { return 'Do you have current or past bankruptcy or insolvency proceedings to declare?' }
}

module.exports = BankruptcyPage
