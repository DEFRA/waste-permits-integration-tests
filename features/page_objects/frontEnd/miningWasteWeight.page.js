const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class MiningWasteWeightPage extends FrontEndPageObject {
  get title () { return 'How much extractive waste will you produce?' }

  get MiningWasteWeightInput () { return {css: '#mining-waste-weight'} }

  /****************************************************************************/

  async completePage (miningWaste = {}, title) {
    const { miningWasteWeight = '' } = miningWaste
    await this.waitForPage(title)
    await this.input(this.MiningWasteWeightInput, miningWasteWeight)
    return this.click(this.continueButton)
  }
}

module.exports = MiningWasteWeightPage
