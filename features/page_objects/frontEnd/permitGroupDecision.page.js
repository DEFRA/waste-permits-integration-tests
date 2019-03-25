const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PermitGroupDecisionPage extends FrontEndPageObject {
  get title () { return 'Decide who will be the permit holders for the organisation or group' }

  get applyAsCompanyLink () { return { css: '#apply-as-company-link' } }
  get applyAsPostHoldersLink () { return { css: '#apply-as-post-holders-link' } }

  async completePage (permitHolder) {
    await this.waitForPage()
    if (permitHolder === 'limited company') {
      return this.click(this.applyAsCompanyLink)
    } else {
      return this.click(this.applyAsPostHoldersLink)
    }
  }
}

module.exports = PermitGroupDecisionPage
