const AddressManualPageObject = require('./base/AddressManualPageObject').AddressManualPageObject

class PublicBodyAddressManualPage extends AddressManualPageObject {
  get title () { return 'What is the main address for the local authority or public body?' }
}

module.exports = PublicBodyAddressManualPage
