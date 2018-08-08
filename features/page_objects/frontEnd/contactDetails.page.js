const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ContactDetailsPage extends FrontEndPageObject {
  get title () { return 'Who should we contact about this application?' }

  get firstNameInput () { return {css: '#first-name'} }
  get lastNameInput () { return {css: '#last-name'} }
  get isAgentCheckbox () { return {css: '#is-contact-an-agent'} }
  get agentCompanyInput () { return {css: '#agent-company'} }
  get telephoneInput () { return {css: '#telephone'} }
  get emailInput () { return {css: '#email'} }

  async completePage ({firstName = '', lastName = '', agentCompany = '', telephone = '', email = ''}) {
    await this.waitForPage()
    await this.input(this.firstNameInput, firstName)
    await this.input(this.lastNameInput, lastName)
    if (agentCompany) {
      await this.click(this.isAgentCheckbox)
      await this.input(this.agentCompanyInput, agentCompany)
    }
    await this.input(this.telephoneInput, telephone)
    await this.input(this.emailInput, email)
    return this.click(this.continueButton)
  }
}

module.exports = ContactDetailsPage
