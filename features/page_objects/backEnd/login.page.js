const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class LoginPage extends CRMPageObject {
  get heading () { return { css: '#loginHeader, .text-title' } }
  get loginName () { return {name: 'loginfmt'} }
  get loginPassword () { return {name: 'passwd'} }
  get nextButton () { return {css: '.btn[value="Next"]'} }
  get signinButton () { return {css: '.btn[value="Sign in"]'} }
  get staySigninNoButton () { return {css: '.btn[value="No"]'} }

  async completePage ({username, password}) {
    await this.waitForText(this.heading, 'Sign in')
    await this.input(this.loginName, username)
    await this.click(this.nextButton)
    await this.waitUntilStale(this.loginName)
    await this.waitForText(this.heading, 'Enter password')
    await this.input(this.loginPassword, password)
    await this.click(this.signinButton)
    await this.waitForText(this.heading, 'Stay signed in?')
    return this.click(this.staySigninNoButton)
  }
}

module.exports = LoginPage
