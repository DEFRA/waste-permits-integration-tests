const AddressSelectPageObject = require('./base/AddressSelectPageObject').AddressSelectPageObject

class PermitHolderAddressSelectPage extends AddressSelectPageObject {
  get title () { return 'What is their address?' }
}

module.exports = PermitHolderAddressSelectPage
