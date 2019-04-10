const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PermitHolderDetailsPage extends FrontEndPageObject {
  get title () { return 'Who will be the permit holder?' }
  get charityTitle () { return 'Who will hold the permit for the charity or trust?' }

  get firstNameInput () { return { css: '#first-name' } }
  get lastNameInput () { return { css: '#last-name' } }
  get jobTitleInput () { return { css: '#job-title' } }
  get dayOfBirthInput () { return { css: '#dob-day' } }
  get monthOfBirthInput () { return { css: '#dob-month' } }
  get yearOfBirthInput () { return { css: '#dob-year' } }

  async completePage ({ firstName, lastName, jobTitle, dob }, title) {
    await this.waitForPage(title)
    await this.input(this.firstNameInput, firstName)
    await this.input(this.lastNameInput, lastName)
    await this.input(this.dayOfBirthInput, dob.day)
    await this.input(this.monthOfBirthInput, dob.month)
    await this.input(this.yearOfBirthInput, dob.year)
    if (this.data.actualPermitHolder && this.data.actualPermitHolder.toLowerCase() === 'group') {
      await this.input(this.jobTitleInput, jobTitle)
    }
    return this.click(this.continueButton)
  }
}

module.exports = PermitHolderDetailsPage
