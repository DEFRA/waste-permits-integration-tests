const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class McpUnder500HoursPage extends FrontEndPageObject {
  get title () { return 'Will your MCP operate for less than 500 hours a year?' }

  get yesOption () { return { css: '#operating-under-500-hours-yes' } }
  get noOption () { return { css: '#operating-under-500-hours-no' } }

  async completePage (under500Hours) {
    await this.waitForPage()
    if (under500Hours) {
      await this.click(this.yesOption)
    } else {
      await this.click(this.noOption)
    }
    return this.click(this.continueButton)
  }
}

module.exports = McpUnder500HoursPage
