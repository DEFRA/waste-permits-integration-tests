const config = require('../../../../config')
const PageObject = require('./../../base/PageObject').PageObject

class FrontEndPageObject extends PageObject {
  get continueButton () { return {css: '#submit-button'} }

  get pageHeading () { return {css: '#page-heading'} }

  get errorMsg () { return {css: '#error-summary-list'} }

  /****************************************************************************/

  async waitForPage (title, timeout = config.timeout) {
    const expectedTitle = title || this.title
    return this.hasText(this.pageHeading, expectedTitle)
  }

  async checkError (message, timeout = config.timeout) {
    return this.containsText(this.errorMsg, message, timeout)
  }
}

module.exports = {FrontEndPageObject}
