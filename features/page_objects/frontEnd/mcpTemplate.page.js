const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class McpTemplatePage extends FrontEndPageObject {
  get title () { return 'Download and complete the plant or generator list template' }

  get continueButton () { return { css: '#mcp-template-downloaded-button' } }

  async completePage () {
    await this.waitForPage()
    return this.click(this.continueButton)
  }
}

module.exports = McpTemplatePage
