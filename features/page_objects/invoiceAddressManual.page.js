const AddressManualPageObject = require('./base/AddressManualPageObject').AddressManualPageObject

class InvoiceAddressManualPage extends AddressManualPageObject {
  get title () { return 'Where should we send invoices for the annual costs after the permit has been issued?' }
}

module.exports = InvoiceAddressManualPage
