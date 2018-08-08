const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class AddressSelectPageObject extends FrontEndPageObject {
  get postcodeInput () { return {css: '#postcode'} }
  get manualAddressLink () { return {css: '#manual-address-link'} }

  async completePage (postcode) {
    await this.waitForPage()

    if (postcode) {
      await this.input(this.postcodeInput, postcode)
      return this.click(this.continueButton)
    } else {
      return this.click(this.manualAddressLink)
    }
  }
}

module.exports = {AddressSelectPageObject}
