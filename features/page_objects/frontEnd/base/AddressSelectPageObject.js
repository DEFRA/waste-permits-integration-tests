const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class AddressSelectPageObject extends FrontEndPageObject {
  get postcodeInput () { return {css: '#postcode'} }
  get manualAddressLink () { return {css: '#manual-address-link'} }

  async completePage (postcode, title) {
    await this.waitForPage(title || this.title)

    if (postcode) {
      await this.input(this.postcodeInput, postcode)
      return this.click(this.continueButton)
    } else {
      return this.click(this.manualAddressLink)
    }
  }
}

module.exports = {AddressSelectPageObject}
