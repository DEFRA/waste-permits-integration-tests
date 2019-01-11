const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class DashboardPage extends CRMPageObject {
  get navActionListContainer () { return { css: '.navActionListContainer' } }
  get applicationsButton () { return { css: '.navActionListContainer a[title="Applications"]' } }

  async selectApplications () {
    await this.sleep(1000)
    await this.waitUntilVisible(this.navActionListContainer)
    await this.retry(async () => {
      return this.click(this.applicationsButton)
    }, 100)
    return this.waitUntilStale(this.navActionListContainer)
  }
}

module.exports = DashboardPage
