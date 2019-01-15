const CRMPageObject = require('./base/CRMPageObject').CRMPageObject
const config = require('../../../config')

class PasswordPage extends CRMPageObject {
  get title () { return 'Enter password' }

  get loginHeader () { return {id: 'loginHeader'} }
  get loginPassword () { return {name: 'passwd'} }
  get signinButtonP () { return {id: 'idSIButton9'} }
  get staySigninNoButton () { return {css: '#idBtn_Back'} }

  async completePage () {
    // await this.waitForPage()
    await this.waitUntilLoaded(this.loginPassword)
    await this.sleep(7000)
    await this.input(this.loginPassword, config.pass1PSCCRM)
    await this.sleep(7000)
    await this.waitUntilLoaded(this.signinButtonP)
    await this.click(this.signinButtonP)
    await this.sleep(7000)
    return this.click(this.staySigninNoButton)
  }
}

module.exports = PasswordPage
