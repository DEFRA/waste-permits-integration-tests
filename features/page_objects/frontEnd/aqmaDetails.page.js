const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class AqmaDetailsPage extends FrontEndPageObject {
  get title () { return 'Is any plant or generator in an Air Quality Management Area?' }
  get insideAqma () { return { css: '#aqma-on' } }
  get outsideAqma () { return { css: '#aqma-off' } }
  get name () { return { css: '#aqma-name' } }
  get localAuthority () { return { css: '#aqma-local-authority-name' } }
  get nitrogenDioxideLevel () { return { css: '#aqma-nitrogen-dioxide-level' } }

  async completePage (aqmaDetailsRequired, aqmaDetails) {
    await this.waitForPage()
    if (aqmaDetailsRequired) {
      const { name, localAuthority, nitrogenDioxideLevel } = aqmaDetails
      await this.click(this.insideAqma)
      await this.input(this.name, name)
      await this.input(this.localAuthority, localAuthority)
      await this.input(this.nitrogenDioxideLevel, nitrogenDioxideLevel)
    } else {
      await this.click(this.outsideAqma)
    }
    return this.click(this.continueButton)
  }
}

module.exports = AqmaDetailsPage
