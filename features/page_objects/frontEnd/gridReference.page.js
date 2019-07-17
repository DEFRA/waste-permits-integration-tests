const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class GridReferencePage extends FrontEndPageObject {
  get title () { return 'What is the grid reference for the centre of the site?' }
  get titleMCPSR () { return 'What is the grid reference for the site\'s main emissions point?' }

  get gridReferenceInput () { return { css: '#site-grid-reference' } }

  /****************************************************************************/

  async completePage ({ gridReference }, title) {
    if (this.data.permitCategory === 'Medium combustion plant - stationary and in operation after 20/12/2018' || this.data.permitCategory === 'Generators - Specified Generator, Tranche B') {
      await this.waitForPage(titleMCPSR)
    }else await this.waitForPage(title)
    await this.input(this.gridReferenceInput, gridReference)
    return this.click(this.continueButton)
  }
}

module.exports = GridReferencePage
