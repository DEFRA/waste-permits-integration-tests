const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ConfirmMiningWastePage extends FrontEndPageObject {
  get title () { return 'Which mining waste plan will you use?' }

  get 'Water based' () { return { css: '#water-based' } }
  get 'Water and oil based' () { return { css: '#water-and-oil-based' } }

  /****************************************************************************/

  async completePage (miningWaste = {}, title) {
    const { miningWastePlan = 'none' } = miningWaste
    await this.waitForPage(title)
    if (miningWastePlan !== 'none') {
      await this.click(this[miningWastePlan])
    }
    return this.click(this.continueButton)
  }
}

module.exports = ConfirmMiningWastePage
