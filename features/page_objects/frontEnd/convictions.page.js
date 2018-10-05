const DeclarationsPageObject = require('./base/DeclarationsPageObject').DeclarationsPageObject

class ConvictionsPage extends DeclarationsPageObject {
  get title () { return 'Does anyone connected with your business have a conviction for a relevant offence?' }
}

module.exports = ConvictionsPage
