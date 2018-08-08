const PageObject = require('./base/PageObject').PageObject

class TechnicalCompetenceSelectPage extends PageObject {
  get title () { return 'What evidence of technical competence do you have?' }

  competence (competence) {
    const id = competence.replace(/\s+/g, '-').toLowerCase()
    return {css: `#${id}`}
  }

  async completePage (competence) {
    await this.waitForPage()
    await this.click(this.competence(competence))
    return this.click(this.continueButton)
  }
}

module.exports = TechnicalCompetenceSelectPage
