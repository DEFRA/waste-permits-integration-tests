const DeclarationsPageObject = require('./base/DeclarationsPageObject').DeclarationsPageObject

class PostholderConvictionsPage extends DeclarationsPageObject {
  get title () { return 'Does anyone connected with your group have a conviction for a relevant offence?' }
}

module.exports = PostholderConvictionsPage
