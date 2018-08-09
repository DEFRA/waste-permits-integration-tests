const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class AddressManualPageObject extends FrontEndPageObject {
  get buildingNameOrNumberInput () { return {css: '#building-name-or-number'} }
  get addressLine1Input () { return {css: '#address-line-1'} }
  get addressLine2Input () { return {css: '#address-line-2'} }
  get townOrCityInput () { return {css: '#town-or-city'} }
  get postcodeInput () { return {css: '#postcode'} }

  async completePage ({buildingNameOrNumber, addressLine1, addressLine2, townOrCity, postcode}) {
    await this.waitForPage()

    await this.input(this.buildingNameOrNumberInput, buildingNameOrNumber)
    await this.input(this.addressLine1Input, addressLine1)
    await this.input(this.addressLine2Input, addressLine2)
    await this.input(this.townOrCityInput, townOrCity)
    await this.input(this.postcodeInput, postcode)

    return this.click(this.continueButton)
  }
}

module.exports = {AddressManualPageObject}
