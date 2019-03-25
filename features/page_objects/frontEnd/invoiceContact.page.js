const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class InvoiceContactPage extends FrontEndPageObject {
  get title () { return 'Who should we contact about invoicing or payments?' }

  get firstNameInput () { return { css: '#first-name' } }
  get lastNameInput () { return { css: '#last-name' } }
  get telephoneInput () { return { css: '#telephone' } }
  get emailInput () { return { css: '#email' } }

  async completePage ({ firstName = '', lastName = '', telephone = '', email = '' }) {
    await this.waitForPage()
    await this.input(this.firstNameInput, firstName)
    await this.input(this.lastNameInput, lastName)
    await this.input(this.telephoneInput, telephone)
    await this.input(this.emailInput, email)
    return this.click(this.continueButton)
  }
}

module.exports = InvoiceContactPage
