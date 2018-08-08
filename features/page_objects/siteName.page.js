const PageObject = require('./base/PageObject').PageObject

class SiteNamePage extends PageObject {
  get title () { return 'What is the site name?' }

  get siteNameInput () { return {css: '#site-name'} }

  async completePage ({name}, title) {
    await this.waitForPage(title)
    await this.input(this.siteNameInput, name)
    return this.click(this.continueButton)
  }
}

module.exports = SiteNamePage
