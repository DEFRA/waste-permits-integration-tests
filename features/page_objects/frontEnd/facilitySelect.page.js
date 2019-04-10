const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

const findInput = (type) => {
  const css = `#facility-type-${type}-input`
  return { css }
}

class FacilitySelectPage extends FrontEndPageObject {
  get title () { return 'What type of facility do you want the permit for?' }

  get 'Installation' () { return findInput('installation') }
  get 'Waste operation' () { return findInput('waste') }
  get 'Landfill and deposit for recovery' () { return findInput('landfill') }
  get 'Medium combustion plant or specified generator' () { return findInput('mcp') }
  get 'Mining waste operation' () { return findInput('mining') }
  get 'Water discharge' () { return findInput('discharge') }
  get 'Groundwater activity' () { return findInput('groundwater') }

  async completePage (facility) {
    await this.waitForPage()
    await this.click(this[facility])
    return this.click(this.continueButton)
  }
}

module.exports = FacilitySelectPage
