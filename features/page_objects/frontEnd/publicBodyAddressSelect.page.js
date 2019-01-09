const AddressSelectPageObject = require('./base/AddressSelectPageObject').AddressSelectPageObject

class PublicBodyAddressSelectPage extends AddressSelectPageObject {
  get title () { return 'What is the main address for the local authority or public body?' }
  get charityTitle () { return 'What is the main address for the public body?' }
}

module.exports = PublicBodyAddressSelectPage
