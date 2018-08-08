const PageObject = require('./base/PageObject').PageObject

class CheckYourEmailPage extends PageObject {
  get title () { return 'Check your email' }

  get gotItRadio () { return {css: '#got-email'} }
  get notGotItRadio () { return {css: '#not-got-email'} }

  async completePage () {
    await this.waitForPage()
    await this.click(this.gotItRadio)
    return this.click(this.continueButton)
  }

  async notGotEmail () {
    await this.waitForPage()
    await this.click(this.notGotItRadio)
    return this.click(this.continueButton)
  }
}

module.exports = CheckYourEmailPage
