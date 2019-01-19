const DeclarationsPageObject = require('./base/DeclarationsPageObject').DeclarationsPageObject

class PublicBodyConvictionsPage extends DeclarationsPageObject {
  get title () { return 'Does anyone connected with the public body or local authority have a conviction for a relevant offence?' }
  get charityTitle () { return 'Does anyone connected with the body have a conviction for a relevant offence?' }
}

module.exports = PublicBodyConvictionsPage
