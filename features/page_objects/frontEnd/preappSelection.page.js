const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PreappSelectionPage extends FrontEndPageObject {
  get title () { return 'Have you received pre-application advice?' }
  get receivedAdviceRadio () { return {id: 'received-advice'}}
  get wantAdviceRadio () { return {id: 'want-advice'}}
  get noAdviceRadio () { return {id: 'no-advice'}}


  async completePage () {
    await this.waitForPage()
   
    await this.click(this.receivedAdviceRadio)
    return this.click(this.continueButton)
  }
}

module.exports = PreappSelectionPage
