const Logger = require('./helpers/logger')
const logger = new Logger('../temp/links.txt')
const {env} = require('../../../config')
const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CheckYourEmailPage extends FrontEndPageObject {
  get title () { return 'Check your email' }

  get gotItRadio () { return {css: '#got-email'} }
  get notGotItRadio () { return {css: '#not-got-email'} }

  get recoveryLink () { return {css: '#recovery-link'} }

  async completePage () {
    await this.waitForPage()
    await this.click(this.gotItRadio)
    if (env === 'development') {
      logger.log(await this.getText(this.recoveryLink))
    }
    return this.click(this.continueButton)
  }

  async notGotEmail () {
    await this.waitForPage()
    await this.click(this.notGotItRadio)
    return this.click(this.continueButton)
  }
}

module.exports = CheckYourEmailPage
