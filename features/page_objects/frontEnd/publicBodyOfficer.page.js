const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PublicBodyOfficerPage extends FrontEndPageObject {
  get title () { return 'Who is the responsible officer or executive?' }

  get firstNameInput () { return { css: '#first-name' } }
  get lastNameInput () { return { css: '#last-name' } }
  get jobTitleInput () { return { css: '#job-title' } }
  get emailInput () { return { css: '#email' } }

  async completePage ({ firstName = '', lastName = '', jobTitle = '', email = '' }) {
    await this.waitForPage()
    await this.input(this.firstNameInput, firstName)
    await this.input(this.lastNameInput, lastName)
    await this.input(this.jobTitleInput, jobTitle)
    await this.input(this.emailInput, email)
    return this.click(this.continueButton)
  }
}

module.exports = PublicBodyOfficerPage
