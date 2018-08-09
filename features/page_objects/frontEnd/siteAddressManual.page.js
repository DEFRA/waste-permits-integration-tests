const AddressManualPageObject = require('./base/AddressManualPageObject').AddressManualPageObject

class SiteAddressManualPage extends AddressManualPageObject {
  get title () { return 'Enter the site address' }
}

module.exports = SiteAddressManualPage
