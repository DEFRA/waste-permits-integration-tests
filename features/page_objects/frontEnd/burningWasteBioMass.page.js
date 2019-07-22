const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class BurningWasteBioMassPage extends FrontEndPageObject {
  get title () { return 'Are you burning waste biomass?' }
  get 'thermal-rating-over-20-yes' () { return { css: '#thermal-rating-over-20' } }
  get 'thermal-rating-over-20-no' () { return { css: '#thermal-rating-not-over-20' } }
  get 'meets-criteria-yes' () { return { css: '#meets-criteria-yes' } }
  get 'meets-criteria-no' () { return { css: '#meets-criteria-no' } }

  async completePage (burningWasteBioMass, exceeds1MWThermal) {
    await this.waitForPage()
    await this.click(this[`thermal-rating-over-20-${burningWasteBioMass}`])
    switch (exceeds1MWThermal) {
      case 'yes' :
      case 'no' :
        await this.click(this[`meets-criteria-${exceeds1MWThermal}`])
        break
    }
    return this.click(this.continueButton)
  }
}

module.exports = BurningWasteBioMassPage
