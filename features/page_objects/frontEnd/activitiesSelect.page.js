const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

const findInput = (type) => {
  const css = `#activity-${type}-input`
  return { css }
}

class ActivitiesSelectPage extends FrontEndPageObject {
  get title () { return 'Select all the activities you want the permit to cover' }

  get 'Clinical waste transfer station' () { return findInput('1-16-7') }
  get 'Biological treatment of waste - not composting' () { return findInput('1-16-19') }

  async completePage (activities) {
    await this.waitForPage()
    await Promise.all(activities.map((activity) => this.click(this[activity])))
    return this.click(this.continueButton)
  }
}

module.exports = ActivitiesSelectPage
