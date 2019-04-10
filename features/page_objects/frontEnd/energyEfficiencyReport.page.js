const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class EnergyEfficiencyReportPage extends FrontEndPageObject {
  get title () { return 'Do you need to provide an energy efficiency report?' }
  get 'new-or-refurbished-no' () { return { css: '#new-or-refurbished-no' } }
  get 'new-or-refurbished-yes' () { return { css: '#new-or-refurbished-yes' } }

  async completePage (isNewOrRefurbished) {
    await this.waitForPage()
    await this.click(this[`new-or-refurbished-${isNewOrRefurbished}`])
    return this.click(this.continueButton)
  }
}

module.exports = EnergyEfficiencyReportPage
