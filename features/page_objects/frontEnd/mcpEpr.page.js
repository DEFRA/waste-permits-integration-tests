const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class McpEprPage extends FrontEndPageObject {
  get title () { return 'Does your site or installation already have an environmental (EPR) permit?' }
  get 'existing-permit-no' () { return { css: '#existing-permit-no' } }
  get 'existing-permit-yes' () { return { css: '#existing-permit-yes' } }

  async completePage (hasEnvironmentalPermit) {
    await this.waitForPage()
    await this.click(this[`existing-permit-${hasEnvironmentalPermit}`])
    return this.click(this.continueButton)
  }
}

module.exports = McpEprPage
