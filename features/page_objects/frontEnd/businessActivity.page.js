const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

const listedNaceCodes = ['35.11', '01.13', '35.30', '37.00', '01.62', '36.00', '38.21', '86.10']

class BusinessActivityPage extends FrontEndPageObject {
  get title () { return 'What is the NACE code for the main business activity that the plant or generator is used for?' }
  get naceCode () { return { css: '#type-codes-other' } }

  getNaceCode (naceCode) { return { css: `#type-codes-option-${naceCode}` } }

  async completePage (naceCode) {
    await this.waitForPage()
    if (listedNaceCodes.includes(naceCode)) {
      await this.click(this.getNaceCode(naceCode.replace('.', '-')))
    } else {
      await this.click(this.getNaceCode('other'))
      await this.input(this.naceCode, naceCode)
    }
    return this.click(this.continueButton)
  }
}

module.exports = BusinessActivityPage
