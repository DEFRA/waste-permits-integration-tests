const Assert = require('assert')
const webdriver = require('selenium-webdriver')
const config = require('../../../config')
const until = webdriver.until

class PageObject {
  constructor (browser, testdata) {
    this.browser = browser
    this.testdata = testdata
  }

  get continueButton () { return {css: '#submit-button'} }

  get pageHeading () { return {css: '#page-heading'} }

  async waitForPage (title, timeout = config.timeout) {
    const expectedTitle = title || this.title
    return this.hasText(this.pageHeading, expectedTitle)
  }

  async hasText (locator, text, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    const actualtext = await element.getText()
    Assert.equal(actualtext, text)
  }

  async hasValue (locator, value, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    const actualvalue = await element.getAttribute('value')
    Assert.equal(actualvalue, value)
  }

  async click (locator, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return element.click()
  }

  async input (locator, text = '', timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return element.sendKeys(text)
  }

  async waitUntilLoaded (locator, timeout = config.timeout) {
    return this.browser.wait(until.elementLocated(locator), timeout)
  }
}

module.exports = {PageObject}
