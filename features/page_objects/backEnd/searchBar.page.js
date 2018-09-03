const CRMPageObject = require('./base/CRMPageObject').CRMPageObject

class SearchBarPage extends CRMPageObject {
  get mastHead () { return { css: '#crmContentPanel' } }
  get crmAppMessageBarCloseButton () { return { css: '#crmAppMessageBarCloseButton' } }
  get contentIframe () { return { css: '#crmContentPanel iframe' } }
  get searchInput () { return { css: '#search' } }
  get searchStartButton () { return { css: '#findCriteriaButton' } }
  get searchToggleButton () { return { css: '#SearchNode a' } }
  get searchTextBox () { return { css: '#searchTextBox' } }
  get searchButton () { return { css: '#SearchButton' } }

  findByTitle (title) { return { css: `div[title="${title}"] .section_control` } }

  /************************************************************/

  async exists (locator) {
    const elements = await this.browser.findElements(this.searchInput)
    return Promise.resolve(Boolean(elements.length))
  }

  async search (text) {
    // await this.retry(async () => {
    //   await this.waitUntilEnabled(this.crmAppMessageBarCloseButton)
    //   return this.click(this.crmAppMessageBarCloseButton)
    // })
    // await this.sleep(2000)
    // let searchBarExists = false
    // while (!searchBarExists) {
    //   try {
    //     await this.waitUntilEnabled(this.searchToggleButton)
    //     await this.click(this.searchToggleButton)
    //   } catch (e) {}
    //   searchBarExists = await this.exists(this.searchInput)
    // }
    // await this.sleep(2000)
    // await this.click(this.searchToggleButton)
    await this.retry(async () => {
      await this.waitUntilEnabled(this.searchToggleButton)
      return this.click(this.searchToggleButton)
    }, 100)
    await this.retry(async () => {
      await this.waitUntilEnabled(this.searchInput)
      return this.input(this.searchInput, text)
    }, 100)
    await this.retry(async () => {
      await this.waitUntilEnabled(this.searchStartButton)
      return this.click(this.searchStartButton)
    }, 100)
    return this.withIFrame(this.contentIframe, async () => {
      await this.waitUntilEnabled(this.searchTextBox)
      const searchValue = await this.getValue(this.searchTextBox)
      if (searchValue !== text) {
        await this.retry(async () => {
          return this.input(this.searchTextBox, text)
        }, 100)
        await this.retry(async () => {
          await this.waitUntilEnabled(this.searchButton)
          return this.click(this.searchButton)
        }, 100)
      }
      const locator = this.findByTitle(text)
      await this.retry(async () => {
        await this.waitUntilEnabled(locator)
        return this.click(locator)
      }, 100)
    })
  }
}

module.exports = SearchBarPage
