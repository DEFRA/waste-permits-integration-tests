const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class LoginPage extends CRMPageObject {
  get title () { return 'Sign in' }

  get loginHeader () { return {id: 'loginHeader'} }
  get loginName () { return {name: 'loginfmt'} }
  get loginPassword () { return {name: 'passwd'} }
  get nextButton () { return {css: '#idSIButton9'} }
  get signinButton () { return {css: '#idSIButton9'} }
  get staySigninNoButton () { return {css: '#idBtn_Back'} }

  async completePage () {
    await this.waitForPage()
    await this.input(this.loginName, 'wastetest1@defradev.onmicrosoft.com')
    await this.click(this.nextButton)
    // await this.input(this.loginPassword, 'W@stePermits2')
    // await this.click(this.signinButton)
    // return this.click(this.staySigninNoButton)
  }
}

module.exports = LoginPage
