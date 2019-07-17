const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CheckBeforeSendingPage extends FrontEndPageObject {
  get title () { return 'Check your answers' }
  get permit () { return { id: 'section-permit-answer' } }
  get vehicleStorageAreaDrainage () { return { id: 'section-drainage-answer' } }
  get applicationContact () { return { id: 'section-contact-name-answer' } }
  get agent () { return { id: 'section-contact-agent-answer-1' } }
  get contactTelephoneNumber () { return { id: 'section-contact-telephone-answer' } }
  get mainContactEmail () { return { id: 'section-contact-email-answer' } }
  get permitHolderType () { return { id: 'section-permit-holder-type-answer' } }
  get permitHolderCompany () { return { id: 'section-permit-holder-company-answer-1' } }
  get companySecretaryEmail () { return { id: 'section-permit-holder-company-secretary-email-answer' } }
  get convictions () { return { id: 'section-permit-holder-convictions-answer' } }
  get bankruptcy () { return { id: 'section-permit-holder-bankruptcy-or-insolvency-answer' } }


  async completePage ({ firstName = '', lastName = '', agentCompany = '', telephone = '', email = '' }) {
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


  async completePage ({ firstName = '', lastName = '', agentCompany = '', telephone = '', email = '' }) {
    await this.waitForPage()
    await this.hasText(this.applicationContact, firstName+' '+lastName)
    return this.click(this.continueButton)
  }
  
}

module.exports = CheckBeforeSendingPage
