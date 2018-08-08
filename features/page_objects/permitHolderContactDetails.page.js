const PageObject = require('./base/PageObject').PageObject

class PermitHolderContactDetailsPage extends PageObject {
  get title () { return `What are the permit holder's contact details?` }

  get emailInput () { return {css: '#email'} }
  get telephoneInput () { return {css: '#telephone'} }

  async completePage ({telephone, email}) {
    await this.waitForPage()
    await this.input(this.emailInput, email)
    await this.input(this.telephoneInput, telephone)
    return this.click(this.continueButton)
  }
}

module.exports = PermitHolderContactDetailsPage
