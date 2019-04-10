const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

const findInput = (type) => {
  const css = `#mcp-type-${type}-input`
  return { css }
}

class McpTypePage extends FrontEndPageObject {
  get title () { return 'What is your permit for?' }

  get 'stationary mcp' () { return findInput('stationary-mcp') }
  get 'stationary sg' () { return findInput('stationary-sg') }
  get 'stationary mcp also sg' () { return findInput('stationary-mcp-sg') }
  get 'mobile sg' () { return findInput('mobile-sg') }
  get 'mobile sg also mcp' () { return findInput('mobile-sg-mcp') }

  async completePage (mcpType) {
    await this.waitForPage()
    await this.click(this[mcpType])
    return this.click(this.continueButton)
  }
}

module.exports = McpTypePage
