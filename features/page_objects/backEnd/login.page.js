const CRMPageObject = require('./base/CRMPageObject').CRMPageObject
const config = require('../../../config')

class LoginPage extends CRMPageObject {
  get title () { return 'Sign in' }

  get loginHeader () { return {id: 'loginHeader'} }
  get loginName () { return {name: 'loginfmt'} }
  get loginPassword () { return {name: 'passwd'} }
  get nextButton () { return {css: '#idSIButton9'} }
  // get signinButton () { return {css: '#idSIButton9'} }
  get staySigninNoButton () { return {css: '#idBtn_Back'} }

  async completePage () {
    // await this.waitForPage()
    await this.waitUntilLoaded(this.loginName)
    await this.input(this.loginName, config.user1PSCCRM)
    await this.waitUntilLoaded(this.nextButton)
    await this.click(this.nextButton)
    // await this.input(this.loginPassword, 'W@stePermits2')
    // await this.click(this.signinButton)
    // return this.click(this.staySigninNoButton)
  }
}

module.exports = LoginPage
