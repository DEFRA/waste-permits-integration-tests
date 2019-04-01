const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ThermalInputPage extends FrontEndPageObject {
  get title () { return 'Does any single generator unit have a rated thermal input between 20MW and 50MW?' }
  get 'thermal-rating-not-20-to-50' () { return { css: '#thermal-rating-not-20-to-50' } }
  get 'thermal-rating-20-to-50' () { return { css: '#thermal-rating-20-to-50' } }
  get 'engine-type-boiler-etc' () { return { css: '#engine-type-boiler-etc' } }
  get 'engine-type-spark' () { return { css: '#engine-type-spark' } }

  async completePage (thermalInput20to50MW) {
    await this.waitForPage()
    if (thermalInput20to50MW) {
      await this.click(this['thermal-rating-20-to-50'])
      await this.click(this['engine-type-spark'])
    } else {
      await this.click(this['thermal-rating-not-20-to-50'])
    }
    return this.click(this.continueButton)
  }
}

module.exports = ThermalInputPage
