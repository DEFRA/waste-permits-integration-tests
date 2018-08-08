const PageObject = require('./base/PageObject').PageObject

class PermitHolderSelectPage extends PageObject {
  get title () { return 'Who will be the permit holder?' }

  get 'Limited company' () { return { css: '#chosen-holder-limited-company-input' } }
  get 'Sole trader' () { return { css: '#chosen-holder-sole-trader-input' } }
  get 'Individual' () { return { css: '#chosen-holder-individual-input' } }
  get 'Local authority' () { return { css: '#chosen-holder-local-authority-input' } }
  get 'Partnership' () { return { css: '#chosen-holder-partnership-input' } }
  get 'Registered charity' () { return { css: '#chosen-holder-registered-charity-input' } }
  get 'Limited liability partnership' () { return { css: '#chosen-holder-limited-liability-partnership-input' } }
  get 'Other organisation' () { return { css: '#chosen-holder-other-organisation-input' } }

  /***************************************************************************************/

  async completePage (permitHolder = 'none') {
    await this.waitForPage()
    if (permitHolder !== 'none') {
      await this.click(this[permitHolder])
    }
    return this.click(this.continueButton)
  }
}

module.exports = PermitHolderSelectPage
