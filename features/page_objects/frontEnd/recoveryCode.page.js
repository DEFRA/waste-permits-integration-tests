const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class RecoveryCodePage extends FrontEndPageObject {
  get title () { return 'Application Recovery Code' }

  get slug () { return {css: '#slug'} }

  async getLink (locator) {
    const element = await this.waitUntilLoaded(locator)
    return element.getAttribute('href')
  }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = RecoveryCodePage
