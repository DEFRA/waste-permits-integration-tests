const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class BacsProofPage extends FrontEndPageObject {
  get title () { return 'Give proof of your Bacs payment before you send your application' }

  get datePaidDay () { return { id: 'date-paid-day' } }
  get datePaidMonth () { return { id: 'date-paid-month' } }
  get datePaidYear () { return { id: 'date-paid-year' } }
  get amountPaid () { return { id: 'amount-paid' } }
  get paymentReference () { return { id: 'payment-reference' } }

  async completePage ({ date: { day, month, year }, amount, reference }) {
    await this.waitForPage()
    await this.input(this.datePaidDay, day)
    await this.input(this.datePaidMonth, month)
    await this.input(this.datePaidYear, year)
    await this.input(this.amountPaid, amount)
    await this.input(this.paymentReference, reference)
    return this.click(this.continueButton)
  }
}

module.exports = BacsProofPage
