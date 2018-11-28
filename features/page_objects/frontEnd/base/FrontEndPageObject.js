const config = require('../../../../config')
const PageObject = require('./../../base/PageObject').PageObject

class FrontEndPageObject extends PageObject {
  get continueButton () { return {css: '#submit-button'} }

  get pageHeading () { return {css: '#page-heading'} }

  get pageHeadingGovUK () { return {className: 'govuk-heading-l'} }

  get errorMsg () { return {css: '#error-summary-list'} }

  /****************************************************************************/

  async waitForPage (title = this.title, timeout = config.timeout) {
    return this.hasText(this.pageHeading, title)
  }

  async waitForPaymentCompletionPage (title = this.paymentTitle, timeout = config.timeout) {
    return this.hasText(this.pageHeading, title)
  }

  async waitForGovUKPage (title = this.title, timeout = config.timeout) {
    // console.log('HEADING' + this.pageHeadingGovUK.getText())
    return this.hasText(this.pageHeadingGovUK, title)
  }

  async checkError (message, timeout = config.timeout) {
    return this.hasLinesOfText(this.errorMsg, message.split(`//`), timeout)
  }
}

module.exports = {FrontEndPageObject}
