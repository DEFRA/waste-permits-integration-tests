const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PermitHolderDetailsPage extends FrontEndPageObject {
  get title () { return 'Who will be the permit holder?' }

  get firstNameInput () { return {css: '#first-name'} }
  get lastNameInput () { return {css: '#last-name'} }
  get dayOfBirthInput () { return {css: '#dob-day'} }
  get monthOfBirthInput () { return {css: '#dob-month'} }
  get yearOfBirthInput () { return {css: '#dob-year'} }

  async completePage ({firstName, lastName, dob}) {
    await this.waitForPage()
    await this.input(this.firstNameInput, firstName)
    await this.input(this.lastNameInput, lastName)
    await this.input(this.dayOfBirthInput, dob.day)
    await this.input(this.monthOfBirthInput, dob.month)
    await this.input(this.yearOfBirthInput, dob.year)
    return this.click(this.continueButton)
  }
}

module.exports = PermitHolderDetailsPage
