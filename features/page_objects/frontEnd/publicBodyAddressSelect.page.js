const AddressSelectPageObject = require('./base/AddressSelectPageObject').AddressSelectPageObject

class PublicBodyAddressSelectPage extends AddressSelectPageObject {
  get title () { return 'What is the main address for the local authority or public body?' }
}

module.exports = PublicBodyAddressSelectPage
