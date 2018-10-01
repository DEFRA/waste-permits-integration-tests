const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const webdriver = require('selenium-webdriver')
const config = require('../../../config')
const until = webdriver.until

chai.use(chaiAsPromised)
const assert = chai.assert

class PageObject {
  constructor (browser, testdata) {
    this.browser = browser
    this.testdata = testdata
  }

  async waitForPage (title, timeout = config.timeout) {
    throw new Error('Todo: Not implemented')
  }

  async getText (locator, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return element.getText()
  }

  async hasText (locator, expectedText, timeout = config.timeout) {
    const actualText = await this.getText(locator, timeout)
    return assert.equal(actualText, expectedText)
  }

  async hasLinesOfText (locator, expectedLines, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    const lines = (await element.getText()).split('\n')
    return Promise.resolve(assert.sameMembers(lines, expectedLines))
  }

  async hasValue (locator, expectedValue, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return assert.eventually.equal(element.getAttribute('value'), expectedValue)
  }

  async click (locator, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return element.click()
  }

  async input (locator, text = '', timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    await element.clear()
    return element.sendKeys(text)
  }

  async waitUntilLoaded (locator, timeout = config.timeout) {
    return this.browser.wait(until.elementLocated(locator), timeout)
  }
}

module.exports = {PageObject}
