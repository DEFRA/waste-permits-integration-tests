const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class GovPayPageObject extends FrontEndPageObject {
  get pageHeading () { return { css: 'h1' } }
}

module.exports = { GovPayPageObject }
