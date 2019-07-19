const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class AirDispersionReportPage extends FrontEndPageObject {
  get title () { return 'Do you need to provide an air dispersion modelling report?' }
  get 'air-dispersion-modelling-no' () { return { css: '#air-dispersion-modelling-no' } }
  get 'air-dispersion-modelling-yes' () { return { css: '#air-dispersion-modelling-yes' } }

  async completePage (hasEnvironmentalPermit) {
    await this.waitForPage()
    await this.click(this[`air-dispersion-modelling-${hasEnvironmentalPermit}`])
    return this.click(this.continueButton)
  }
}

module.exports = AirDispersionReportPage
