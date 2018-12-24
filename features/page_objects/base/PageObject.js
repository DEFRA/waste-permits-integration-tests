const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const webdriver = require('selenium-webdriver')
const config = require('../../../config')
const until = webdriver.until

chai.use(chaiAsPromised)
const assert = chai.assert

class PageObject {
  constructor (browser, data) {
    this.browser = browser
    this.data = data
  }

  async retry (fn, retries = 5, timeout = 100) {
    try {
      return fn()
    } catch (e) {
      retries--
      if (!retries) {
        throw e
      }
      await this.sleep(timeout)
      return this.retry(fn, retries)
    }
  }

  async waitForPage (title, timeout = config.timeout) {
    throw new Error('Todo: Not implemented')
  }

  async sleep (timer) {
    return this.browser.sleep(timer)
  }

  async getText (locator, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return element.getText()
  }

  async getValue (locator, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return element.getAttribute('value')
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

  async haslink (locator, expectedValue, timeout = config.timeout) {
    const element = await this.waitUntilLoaded(locator, timeout)
    return assert.eventually.equal(element.getAttribute('href'), expectedValue)
  }

  async isAbsent (locator) {
    const found = await this.browser.findElements(locator)
    return assert.equal(found.length, 0)
  }

  async click (locator, timeout = config.timeout) {
    this.log('click', locator)
    const element = await this.waitUntilEnabled(locator, timeout)
    return element.click()
  }

  async input (locator, text = '', timeout = config.timeout) {
    this.log(`input "${text}" into`, locator)
    const element = await this.waitUntilEnabled(locator, timeout)
    await element.clear()
    return element.sendKeys(text)
  }

  async waitUntilLoaded (locator, timeout = config.timeout) {
    await this.sleep(100)
    return this.browser.wait(until.elementLocated(locator), timeout)
  }

  async waitUntilStale (locator, timeout = config.timeout) {
    return this.browser.wait(until.stalenessOf(await this.waitUntilLoaded(locator, timeout)), timeout)
  }

  async waitUntilVisible (locator, timeout = config.timeout) {
    return this.browser.wait(until.elementIsVisible(await this.waitUntilEnabled(locator, timeout)), timeout)
  }

  async waitUntilEnabled (locator, timeout = config.timeout) {
    return this.browser.wait(until.elementIsEnabled(await this.waitUntilLoaded(locator, timeout)), timeout)
  }

  async waitForText (locator, text, timeout = config.timeout) {
    this.log(`waiting for "${text}" within`, locator)
    const element = await this.waitUntilLoaded(locator, timeout)
    return this.browser.wait(until.elementTextIs(element, text), timeout)
  }

  async withIFrame (locator, completeIFrame, timeout = config.timeout) {
    // Wait for iframe to be loaded and switch to iframe context

    this.browser.switchTo().frame(await this.waitUntilLoaded(locator, timeout))
    const body = await this.waitUntilVisible({ css: 'body' })

    // Run a function within the iframe context
    await completeIFrame()

    // Wait for the Iframe to be unloaded and switch to main context
    await this.browser.switchTo().defaultContent()
    try {
      await this.browser.wait(until.stalenessOf(body), timeout)
    } catch (e) { }
    return Promise.resolve(true)
  }

  log (...args) {
    if (config.env.toLowerCase() === 'development') {
      console.log(...args)
    }
  }
}

module.exports = {PageObject}
