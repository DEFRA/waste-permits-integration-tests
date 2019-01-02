const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class CharityDetailsPage extends FrontEndPageObject {
  get title () { return 'What is the charity’s name and number?' }

  get charityName () { return {css: '#charity-name'} }
  get charityNumber () { return {css: '#charity-number'} }

  /****************************************************************************/

  async completePage ({ charityName, charityNumber }) {
    await this.waitForPage()
    await this.input(this.charityName, charityName)
    await this.input(this.charityNumber, charityNumber)
    return this.click(this.continueButton)
  }
}

module.exports = CharityDetailsPage
