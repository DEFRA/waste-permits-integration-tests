const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class DashboardPage extends CRMPageObject {
  get navActionListContainer () { return { css: '.navActionListContainer' } }
  get applicationsButton () { return { css: 'a[title="Applications"]' } }

  async selectApplications () {
    await this.sleep(1000)
    await this.waitUntilVisible(this.navActionListContainer)
    await this.click(this.applicationsButton)
    return this.waitUntilStale(this.navActionListContainer)
  }
}

module.exports = DashboardPage
