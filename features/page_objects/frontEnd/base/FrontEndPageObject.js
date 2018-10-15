const config = require('../../../../config')
const PageObject = require('./../../base/PageObject').PageObject

class FrontEndPageObject extends PageObject {
  get continueButton () { return {css: '#submit-button'} }

  get pageHeading () { return {css: '#page-heading'} }

  get errorMsg () { return {css: '#error-summary-list'} }

  /****************************************************************************/

  async waitForPage (title = this.title, timeout = config.timeout) {
    return this.hasText(this.pageHeading, title)
  }

  async checkError (message, timeout = config.timeout) {
    return this.hasLinesOfText(this.errorMsg, message.split(`//`), timeout)
  }
}

module.exports = {FrontEndPageObject}
