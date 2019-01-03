const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class ApplicationPage extends CRMPageObject {
  get contentIframe () { return { css: '#crmContentPanel iframe[title="Content Area"]' } }
  findTitle (applicationNumber) { return { css: `[title="${applicationNumber}"]` } }

  /************************************************************/

  async withApplication (applicationNumber, fn) {
    await this.sleep(4000)
    return this.withIFrame(this.contentIframe, async () => {
      // await this.waitUntilLoaded({ css: 'body' })
      await this.waitUntilLoaded(this.findTitle(applicationNumber))
      return fn(applicationNumber)
    })
  }
}

module.exports = ApplicationPage
