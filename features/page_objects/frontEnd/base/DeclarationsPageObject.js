const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class DeclarationsPageObject extends FrontEndPageObject {
  get declaredRadio () { return {css: '#declared'} }
  get declaredDetailsInput () { return {css: '#declaration-details'} }
  get noneDeclaredRadio () { return {css: '#none-declared'} }

  /****************************************************************************/

  async completePage (details) {
    await this.waitForPage()
    if (details) {
      await this.click(this.declaredRadio)
      await this.input(this.declaredDetailsInput, details)
    } else {
      await this.click(this.noneDeclaredRadio)
    }
    return this.click(this.continueButton)
  }
}

module.exports = {DeclarationsPageObject}
