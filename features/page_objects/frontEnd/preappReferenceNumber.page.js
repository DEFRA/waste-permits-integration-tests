const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PreappReferenceNumberPage extends FrontEndPageObject {
  get title () { return 'Provide your pre-application reference' }
  get preappReferenceField () { return {css: '#pre-application-reference'}}
  
  async completePage (validPreApp) {
    await this.waitForPage()
    console.log(validPreApp)
    await this.input(this.preappReferenceField, validPreApp)
    return this.click(this.continueButton)
  }
}

module.exports = PreappReferenceNumberPage