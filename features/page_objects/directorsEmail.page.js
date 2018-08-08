const PageObject = require('./base/PageObject').PageObject

class DirectorsEmailPage extends PageObject {
  get title () { return 'What is the email address for the Company Secretary or a director?' }
  get limitedLiabilityPartnershipTitle () { return 'Email address for one of the designated members' }

  get emailInput () { return {css: '#email'} }

  async completePage (email, title) {
    await this.waitForPage(title)
    await this.input(this.emailInput, email)
    return this.click(this.continueButton)
  }
}

module.exports = DirectorsEmailPage
