const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ThermalInputPage extends FrontEndPageObject {
  get title () { return 'Does any single generator unit have a net rated thermal input between 20MW and 50MW?' }
  get thermalInput () { return { css: '#thermal-rating-20-to-50' } }
  get nothermalInput () { return { css: '#thermal-rating-not-20-to-50' } }
  get boilerFurnace () { return { css: '#engine-type-boiler-etc'}}
  get spark () { return { css: '#engine-type-spark'}}
  get 'thermal-rating-not-20-to-50' () { return { css: '#thermal-rating-not-20-to-50' } }
  get 'thermal-rating-20-to-50' () { return { css: '#thermal-rating-20-to-50' } }
  get 'engine-type-boiler' () { return { css: '#engine-type-boiler-etc' } }
  get 'engine-type-spark' () { return { css: '#engine-type-spark' } }

  async completePage (thermalInput20to50MW, generatorEnergyType) {
    
    await this.waitForPage()
    if (thermalInput20to50MW) {
      await this.click(this.thermalInput)
      if (generatorEnergyType === 'boiler') { await this.click(this.boilerFurnace)}
      else { await this.click(this.spark)}
    } else {
      await this.click(this.nothermalInput)
    }
    return this.click(this.continueButton)
  }
}

module.exports = ThermalInputPage
