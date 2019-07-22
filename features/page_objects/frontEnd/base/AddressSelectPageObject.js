const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class AddressSelectPageObject extends FrontEndPageObject {
  get postcodeInput () { return { css: '#postcode' } }
  get manualAddressLink () { return { css: '#manual-address-link' } }

  get selectAddress () { return { css: '#select-address' } }
  get firstAddress () { return { css: '#select-address option:nth-of-type(2)' } }

  async completePage (address, title) {
    await this.waitForPage(title)

    if (this.data.selectAddress) {
      await this.input(this.postcodeInput, address.postcode)
      await this.click(this.continueButton)
      await this.waitUntilLoaded(this.selectAddress)
      await this.click(this.firstAddress)
      return this.click(this.continueButton)
    } else {
      return this.click(this.manualAddressLink)
    }
  }
}

module.exports = { AddressSelectPageObject }
