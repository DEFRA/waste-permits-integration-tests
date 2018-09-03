const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class NavigationBarPage extends CRMPageObject {
  get navBar () { return { css: '#navBar' } }
  get lPTabLink () { return { css: '#TabLP a' } }

  async selectDashboard () {
    await this.sleep(4000)
    await this.waitUntilVisible(this.navBar)
    await this.sleep(1000)
    await this.waitUntilEnabled(this.lPTabLink)
    return this.click(this.lPTabLink)
  }
}

module.exports = NavigationBarPage
