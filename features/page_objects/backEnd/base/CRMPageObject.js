const config = require('../../../../config')
const PageObject = require('./../../base/PageObject').PageObject

class CRMPageObject extends PageObject {
  get pageHeading () { return { css: '#loginHeader' } }

  // /****************************************************************************/

  async waitForPage (title, timeout = config.timeout) {
    return this.waitForText(this.pageHeading, title || this.title)
  }
  //
  // async click (locator) {
  //   const element = await this.waitUntilEnabled(locator)
  //   return element.click(locator)
  // }
  //
  // async click (input) {
  //   const element = await this.waitUntilEnabled(locator, )
  //   return element.click(locator)
  // }
}

module.exports = {CRMPageObject}
