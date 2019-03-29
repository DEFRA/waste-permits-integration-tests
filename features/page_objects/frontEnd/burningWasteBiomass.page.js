const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class BurningWasteBiomassPage extends FrontEndPageObject {
  get title () { return 'Are you burning waste biomass?' }
  get 'thermal-rating-over-20' () { return { css: '#thermal-rating-over-20' } }
  get 'thermal-rating-not-over-20' () { return { css: '#thermal-rating-not-over-20' } }
  get 'meets-criteria-yes' () { return { css: '#meets-criteria-yes' } }
  get 'meets-criteria-no' () { return { css: '#meets-criteria-no' } }

  async completePage (thermalRatingOver20MW) {
    await this.waitForPage()
    if (thermalRatingOver20MW) {
      await this.click(this['thermal-rating-over-20'])
      await this.click(this['meets-criteria-yes'])
    } else {
      await this.click(this['thermal-rating-not-over-20'])
    }
    return this.click(this.continueButton)
  }
}

module.exports = BurningWasteBiomassPage
