const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class ApplicationsListPage extends CRMPageObject {
  get contentIframe () { return { css: '#crmContentPanel iframe' } }
  get findCriteriaInput () { return { css: '#crmGrid_findCriteria' } }
  get findCriteriaButton () { return { css: '#crmGrid_findCriteriaButton' } }
  findByLinkByTitle (title) { return { css: `a[title="${title}"]` } }

  async findApplication () {
    const { applicationNumber } = this.data
    await this.sleep(4000)
    await this.waitUntilEnabled(this.findCriteriaInput)
    await this.input(this.findCriteriaInput, applicationNumber)
    await this.sleep(5000)
    await this.waitUntilEnabled(this.findCriteriaButton)
    await this.click(this.findCriteriaButton)
    await this.sleep(1000)
    const locator = this.findByLinkByTitle(applicationNumber)
    if (await this.browser.findElements(locator)) {
      await this.waitUntilEnabled(locator)
      return this.click(locator)
    }
    return this.findApplication()
  }

  async selectApplication (applicationNumber = this.data.applicationNumber) {
    await this.sleep(1000)
    return this.withIFrame(this.contentIframe, async () => {
      await this.findApplication(applicationNumber)
      return this.sleep(4000)
    })
  }
}

module.exports = ApplicationsListPage
