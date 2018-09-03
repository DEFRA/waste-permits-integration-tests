const config = require('../../../../config')
const PageObject = require('./../../base/PageObject').PageObject

class CRMPageObject extends PageObject {
  get pageHeading () { return { css: '#loginHeader' } }

  // /****************************************************************************/

  async waitForPage (title, timeout = config.timeout) {
    const expectedTitle = title || this.title
    return this.hasText(this.pageHeading, expectedTitle)
  }
}

module.exports = {CRMPageObject}
