const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class GridReferencePage extends FrontEndPageObject {
  get title () { return 'What is the grid reference for the site\'s main emissions point?' }

  get gridReferenceInput () { return { css: '#site-grid-reference' } }

  /****************************************************************************/

  async completePage ({ gridReference }, title) {
    await this.waitForPage(title)
    await this.input(this.gridReferenceInput, gridReference)
    return this.click(this.continueButton)
  }
}

module.exports = GridReferencePage
