const PageObject = require('./base/PageObject').PageObject

class GridReferencePage extends PageObject {
  get title () { return 'What is the grid reference for the centre of the site?' }

  get gridReferenceInput () { return {css: '#site-grid-reference'} }

  async completePage ({gridReference}, title) {
    await this.waitForPage(title)
    await this.input(this.gridReferenceInput, gridReference)
    return this.click(this.continueButton)
  }
}

module.exports = GridReferencePage
