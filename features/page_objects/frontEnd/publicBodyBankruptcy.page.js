const DeclarationsPageObject = require('./base/DeclarationsPageObject').DeclarationsPageObject

class PublicBodyBankruptcyPage extends DeclarationsPageObject {
  get title () { return 'Does anyone connected with the public body or local authority have current or past bankruptcy or insolvency proceedings to declare?' }
}

module.exports = PublicBodyBankruptcyPage
