const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class DirectorsDateOfBirthPage extends FrontEndPageObject {
  get title () { return `What is the director's date of birth?` }
  get alternateTitle () { return `What are the directors' dates of birth?` }
  get limitedLiabilityPartnershipTitle () { return `What is the member's date of birth?` }
  get alternateLimitedLiabilityPartnershipTitle () { return `What are the members' dates of birth?` }

  directorsDayOfBirthInput (index) { return { css: `#director-dob-day-${index}` } }

  async completePage (directors, title) {
    if (directors.length > 1) {
      await this.waitForPage(title || this.alternateTitle)
    } else {
      await this.waitForPage(title)
    }

    await Promise.all(directors.map((director, index) => {
      return this.input(this.directorsDayOfBirthInput(index), director.dob.day)
    }))

    return this.click(this.continueButton)
  }
}

module.exports = DirectorsDateOfBirthPage
