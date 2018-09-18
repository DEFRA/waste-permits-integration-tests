const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PartnershipListPage extends FrontEndPageObject {
  get title () { return 'Business partners you have added to this application' }

  get addPartnerLink () { return {css: '#add-another-partner-link'} }
}

module.exports = PartnershipListPage
