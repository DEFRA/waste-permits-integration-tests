const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject
let i
let assessmentType
let assessmentPrice

class ConfirmActivitiesAndAssessmentsPage extends FrontEndPageObject {
  get title () { return 'Confirm activities and assessments' }
  get totalText () { return { id: 'total-desc' } }
  get totalPrice () { return { id: 'total-cost' } }

  findAssessments (applicationNumber) { return { id: 'cost-item-' + applicationNumber + '-desc' } }
  findPrice (applicationNumber) { return { id: 'cost-item-' + applicationNumber + '-cost' } }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }

  async completePageValidation () {
    await this.waitForPage()

    for (i = 0; i < 10; i++) {
      assessmentType = await this.findAssessments(i)
      const actualText = await this.getText(assessmentType)
      switch (actualText) {
        case 'Biological treatment of waste - not composting':
          assessmentPrice = await this.findPrice(i)
          await this.hasText(assessmentPrice, '£10,141.00')
          break

        case 'Habitats assessment':
          assessmentPrice = await this.findPrice(i)
          await this.hasText(assessmentPrice, '£779.00')
          break

        case 'Waste recovery plan':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, '£1,231.00')
          break

        case 'Noise and vibration management plan':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, '£1,246.00')
          break

        case 'Energy efficiency report':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, 'Cost included in application')
          break

        case 'Fire prevention plan':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, '£1,241.00')
          break

        case 'Emissions management plan':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, '£1,241.00')
          break

        case 'Best available techniques assessment':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, 'Cost included in application')
          break

        case 'Odour management plan':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, '£1,246.00')
          break

        case 'Dust and bio-aerosol management plan':
          assessmentPrice = await this.findPrice(i)

          await this.hasText(assessmentPrice, '£620.00')
          break

        default: throw new Error('Todo:')
      }
    }

    await this.hasText(this.totalPrice, '£17,745.00')
    await this.hasText(this.totalText, 'Total')
    return this.click(this.continueButton)
  }
}

module.exports = ConfirmActivitiesAndAssessmentsPage
