const AddressSelectPageObject = require('./base/AddressSelectPageObject').AddressSelectPageObject

class InvoiceAddressSelectPage extends AddressSelectPageObject {
  get title () { return 'Where should we send invoices for the annual costs after the permit has been issued?' }
}

module.exports = InvoiceAddressSelectPage
