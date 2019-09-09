const webdriver = require('selenium-webdriver')

require('chromedriver')
require('geckodriver')
require('iedriver')
require('cucumber')
const fs = require('fs')
const firefox = require('selenium-webdriver/firefox')

const PLATFORMS = {
  CHROME_PHONE_DEV: 'chrome-phone-dev',
  CHROME_PHONE_TEST: 'chrome-phone-test',
  CHROME_DESKTOP_DEV: 'chrome-desktop-dev',
  CHROME_DESKTOP_TEST: 'chrome-desktop-test',
  CHROME_DESKTOP_HEADLESS_TEST: 'chrome-desktop-headless-test',
  CHROME_TABLET_DEV: 'chrome-tablet-dev',
  CHROME_TABLET_TEST: 'chrome-tablet-test',
  IE_DESKTOP_DEV: 'ie-desktop-dev',
  IE_DESKTOP_TEST: 'ie-desktop-test',
  FIREFOX_DESKTOP_DEV: 'firefox-desktop-dev',
  FIREFOX_DESKTOP_TEST: 'firefox-desktop-test'
}

function formatDate (date = new Date()) {
  let dayOfMonth = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()

  // formatting
  month = month < 10 ? '0' + month : month
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth

  return `${year}_${month}_${dayOfMonth}_>_${hour}_${minutes}`
}

class Driver {
  constructor () {
    this.browser = undefined
  }

  getChromeDesktopSpec (width, height) {
    return {
      browserName: 'chrome',
      browserstack: {
        user: 'amrutabendre1',
        key: ''
      },
      chromeOptions: {
        args: ['--window-size=' + width + ',' + height]
      }
    }
  }

  getChromeDesktopHeadlessSpec (width, height) {
    return {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless' + ',' + '--window-size=' + width + ',' + height]
      }
    }
  }

  getChromePhoneSpec (width, height) {
    return {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--window-size=' + width + ',' + height],
        mobileEmulation: {
          userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1'
        }
      }
    }
  }

  getChromeTabletSpec (width, height) {
    return {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--window-size=' + width + ',' + height],
        mobileEmulation: {
          userAgent: 'Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36'
        }
      }
    }
  }

  getFirefoxDesktopSpec () {
    return {
      browserName: 'firefox',
      marionette: true,
      acceptInsecureCerts: true
    }
  }

  getIeDesktopSpec () {
    return {
      browserName: 'ie',
      ignoreProtectedModeSettings: true,
      ignoreZoomSetting: true,
      'ie.ensureCleanSession': true
    }
  }

  getDriverSpec (platform, width, height) {
    let spec

    switch (platform) {
      case PLATFORMS.CHROME_PHONE_DEV:
        spec = this.getChromePhoneSpec(width, height)
        break
      case PLATFORMS.CHROME_PHONE_TEST:
        spec = this.getChromePhoneSpec(width, height)
        break
      case PLATFORMS.CHROME_DESKTOP_DEV:
        spec = this.getChromeDesktopSpec(width, height)
        break
      case PLATFORMS.CHROME_DESKTOP_HEADLESS_TEST:
        spec = this.getChromeDesktopHeadlessSpec(width, height)
        break
      case PLATFORMS.CHROME_DESKTOP_TEST:
        spec = this.getChromeDesktopSpec(width, height)
        break
      case PLATFORMS.CHROME_TABLET_DEV:
        spec = this.getChromeTabletSpec(width, height)
        break
      case PLATFORMS.CHROME_TABLET_TEST:
        spec = this.getChromeTabletSpec(width, height)
        break
      case PLATFORMS.FIREFOX_DESKTOP_DEV:
        spec = this.getFirefoxDesktopSpec()
        break
      case PLATFORMS.FIREFOX_DESKTOP_TEST:
        spec = this.getFirefoxDesktopSpec()
        break
      case PLATFORMS.IE_DESKTOP_DEV:
        spec = this.getIeDesktopSpec()
        break
      case PLATFORMS.IE_DESKTOP_TEST:
        spec = this.getIeDesktopSpec()
        break
    }
    return spec
  }

  getBrowser (parameters) {
    if (!this.browser) {
      switch (parameters.platform) {
        case PLATFORMS.CHROME_PHONE_DEV:
        case PLATFORMS.CHROME_PHONE_TEST:
        case PLATFORMS.CHROME_DESKTOP_TEST:
        case PLATFORMS.CHROME_DESKTOP_HEADLESS_TEST:
        case PLATFORMS.CHROME_DESKTOP_DEV:
        case PLATFORMS.CHROME_TABLET_TEST:
          this.browser = new webdriver.Builder().withCapabilities(this.getDriverSpec(parameters.platform, parameters.width, parameters.height)).build()
          break
        case PLATFORMS.CHROME_TABLET_DEV:
          this.browser = new webdriver.Builder().withCapabilities(this.getDriverSpec(parameters.platform, parameters.width, parameters.height)).build()
          break
        case PLATFORMS.FIREFOX_DESKTOP_DEV:
        case PLATFORMS.FIREFOX_DESKTOP_TEST:
          let options = new firefox
            .Options()
            .setBinary('/Applications/Firefox\ Developer\ Edition.app/Contents/MacOS/firefox-bin')
          this.browser = new webdriver
            .Builder()
            .withCapabilities(this.getDriverSpec(parameters.platform))
            .forBrowser('firefox').setFirefoxOptions(options)
            .build()
          this.browser.manage().window().setSize(parameters.width, parameters.height)
          break
        case PLATFORMS.IE_DESKTOP_TEST:
          this.browser = new webdriver.Builder().withCapabilities(this.getDriverSpec(parameters.platform)).build()
          this.browser.manage().window().setSize(parameters.width, parameters.height)
          break
        case PLATFORMS.IE_DESKTOP_DEV:
          this.browser = new webdriver.Builder().withCapabilities(this.getDriverSpec(parameters.platform)).build()
          this.browser.manage().window().setSize(parameters.width, parameters.height)
          break
        default:
          throw new Error('Unsupported platform')
      }
    }
    return this.browser
  }

  quitBrowser () {
    const browser = this.browser
    this.browser = null
    return browser.quit()
  }

  async takeScreenshotsAfterFailure (filename) {
    const browser = this.browser
    if (filename.includes('?')) {
      filename = filename.substring(0, filename.indexOf('?'))
    }
    const filenameNoSpecialChars = filename.replace(/[^a-z0-9]/gi, '_').toLowerCase()
    const titleDateStamp = `_>>>_${formatDate()}_>>>_${filenameNoSpecialChars}.png`
    if (!fs.existsSync('AllScreenshots')) {
      fs.mkdirSync('AllScreenshots')
    }
    const data = await browser.takeScreenshot()
    const base64Data = data.replace(/^data:image\/png;base64,/, '')
    fs.writeFile('AllScreenshots/' + titleDateStamp, base64Data, 'base64', function (err) {
      if (err) console.log(err)
    })
  }
}

const _instance = new Driver()

module.exports.driver = _instance
