const AddressManualPageObject = require('./base/AddressManualPageObject').AddressManualPageObject

class PermitHolderAddressManualPage extends AddressManualPageObject {
  get title () { return 'What is their address?' }
}

module.exports = PermitHolderAddressManualPage
