const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class BespokeOrStandardRulesPage extends FrontEndPageObject {
  get title () { return 'Choose the type of permit you want' }

  get 'Bespoke' () { return { css: '#bespoke-permit-type' } }
  get 'Standard rules' () { return { css: '#standard-rules-permit-type' } }

  /***************************************************************************************/

  async completePage (permitType = 'none') {
    await this.waitForPage()
    if (permitType !== 'none') {
      await this.click(this[permitType])
    }
    return this.click(this.continueButton)
  }
}

module.exports = BespokeOrStandardRulesPage
