const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class NavTourPage extends CRMPageObject {
  get dialogIframe () { return { css: '#InlineDialog iframe' } }
  get closeButton () { return { css: '#navTourCloseButtonImage' } }

  /************************************************************/

  async close () {
    return this.withIFrame(this.dialogIframe, async () => {
      await this.retry(async () => {
        await this.waitUntilEnabled(this.closeButton)
        return this.click(this.closeButton)
      }, 100)
    })
  }
}

module.exports = NavTourPage
