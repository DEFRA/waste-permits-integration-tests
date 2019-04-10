const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CardPaymentPage extends FrontEndPageObject {
  get title () { return 'Enter card details' }
  get cardnoInput () { return { id: 'card-no' } }
  get expiryMonthInput () { return { id: 'expiry-month' } }
  get expiryYearInput () { return { id: 'expiry-year' } }
  get nameInput () { return { id: 'cardholder-name' } }
  get cvcInput () { return { id: 'cvc' } }
  get addrlineOneInput () { return { id: 'address-line-1' } }
  get cityInput () { return { id: 'address-city' } }
  get postcodeInput () { return { id: 'address-postcode' } }
  get emailInput () { return { id: 'email' } }
  get submitCardDetailsButton () { return { id: 'submit-card-details' } }
  get cancelPaymentLink () { return { id: 'cancel-payment' } }

  async completePage ({ cardNumber = '', expiryMonth = '', expiryYear = '', name = '', cvc = '', addrLineOne = '', city = '', postcode = '', email = '' }, title) {
    await this.waitForGovUKPage(title)
    await this.input(this.cardnoInput, cardNumber)
    await this.input(this.expiryMonthInput, expiryMonth)
    await this.input(this.expiryYearInput, expiryYear)
    await this.input(this.nameInput, name)
    await this.input(this.cvcInput, cvc)
    await this.input(this.addrlineOneInput, addrLineOne)
    await this.input(this.cityInput, city)
    await this.input(this.postcodeInput, postcode)
    await this.input(this.emailInput, email)
    return this.click(this.submitCardDetailsButton)
  }
}

module.exports = CardPaymentPage
