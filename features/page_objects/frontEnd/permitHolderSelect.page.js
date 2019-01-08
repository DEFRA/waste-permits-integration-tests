const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

const findInput = (type) => {
  const css = `#chosen-holder-${type}-input, #permit-holder-type-${type}-input`
  return { css }
}

class PermitHolderSelectPage extends FrontEndPageObject {
  get title () { return 'Who will be the permit holder?' }

  get 'Limited company' () { return findInput('limited-company') }
  get 'Sole trader' () { return findInput('sole-trader') }
  get 'Individual' () { return findInput('individual') }
  get 'Public body' () { return findInput('public-body') }
  get 'Registered charity' () { return findInput('registered-charity') }
  get 'Partnership' () { return findInput('partnership') }
  get 'Limited liability partnership' () { return findInput('limited-liability-partnership') }
  get 'Other organisation' () { return findInput('other-organisation') }

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
