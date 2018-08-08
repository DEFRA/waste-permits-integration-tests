const PageObject = require('./base/PageObject').PageObject

class SaveApplicationPage extends PageObject {
  get title () { return 'Save your application' }

  get emailInput () { return {css: '#save-and-return-email'} }

  async completePage (email) {
    await this.waitForPage()
    await this.input(this.emailInput, email)
    return this.click(this.continueButton)
  }
}

module.exports = SaveApplicationPage
