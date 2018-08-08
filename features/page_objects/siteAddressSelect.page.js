const AddressSelectPageObject = require('./base/AddressSelectPageObject').AddressSelectPageObject

class SiteAddressSelectPage extends AddressSelectPageObject {
  get title () { return 'What is the postcode for the site?' }
}

module.exports = SiteAddressSelectPage
