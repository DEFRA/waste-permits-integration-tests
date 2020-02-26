const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ConsultPage extends FrontEndPageObject {
  get title () { return 'Will the operation release any substance into a sewer, harbour or coastal or territorial waters?' }

  get sewerCheckBox () { return { css: '#consult-sewer-required' } }
  get sewerInput () { return { css: '#consult-sewerage-undertaker' } }
  get harbourCheckBox () { return { css: '#consult-harbour-required' } }
  get harbourInput () { return { css: '#consult-harbour-authority' } }
  get fisheriesCheckBox () { return { css: '#consult-fisheries-required' } }
  get fisheriesInput () { return { css: '#consult-fisheries-committee' } }
  get noneCheckBox () { return { css: '#consult-none-required' } }

  async completePage (harbour, fisheries, sewer) {
    await this.waitForPage()
    await this.click(this.sewerCheckBox)
    await this.click(this.harbourCheckBox)
    await this.click(this.fisheriesCheckBox)
    await this.input(this.sewerInput, sewer)
    await this.input(this.harbourInput,harbour)
    await this.input(this.fisheriesInput, fisheries)
    return this.click(this.continueButton)
  }
}

module.exports = ConsultPage
