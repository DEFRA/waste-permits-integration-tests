const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class OfflineApplyPage extends FrontEndPageObject {
  get titleText () { return { css: '#page-heading' } }
  get backButton () { return { css: '#back-link' } }
  get changeYourSelectionLink () { return { css: '#change-selection-link' } }
  get standardRulesLink () { return { css: '#standard-rules-link' } }
  get floodLink () { return { css: '#flood-link' } }
  get waterLink () { return { css: '#water-link' } }
  get radioActiveLink () { return { css: '#radioactive-link' } }

  /****************************************************************************/

  async completePage (expTitle, link) {
    await this.hasText(this.titleText, expTitle)

    switch (expTitle.toLowerCase()) {
      case 'apply for flood risk activities permits':
        await this.haslink(this.floodLink, link)
        break
      case 'apply for water discharges permits':
        await this.haslink(this.waterLink, link)
        break
      case 'apply for radioactive substances for non-nuclear sites permits':
        await this.haslink(this.radioActiveLink, link)
        break
      default:
        await this.haslink(this.standardRulesLink, link)
    }
    return this.click(this.changeYourSelectionLink)
  }
}

module.exports = OfflineApplyPage
