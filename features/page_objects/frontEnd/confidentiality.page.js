const DeclarationsPageObject = require('./base/DeclarationsPageObject').DeclarationsPageObject

class ConfidentialityPage extends DeclarationsPageObject {
  get title () { return 'Is part of your application commercially confidential?' }
}

module.exports = ConfidentialityPage
