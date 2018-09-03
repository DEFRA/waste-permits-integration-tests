const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class PasswordPage extends CRMPageObject {
  get title () { return 'Enter password' }

  get loginHeader () { return {id: 'loginHeader'} }
  get loginPassword () { return {name: 'passwd'} }
  get signinButton () { return {css: '#idSIButton9'} }
  get staySigninNoButton () { return {css: '#idBtn_Back'} }

  async completePage () {
    await this.waitForPage()
    await this.input(this.loginPassword, 'W@stePermits2')
    return this.click(this.signinButton)
    // return this.click(this.staySigninNoButton)
  }
}

module.exports = PasswordPage
