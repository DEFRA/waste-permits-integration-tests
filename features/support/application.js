const config = require('../../config')
const fs = require('fs')

class Application {
  constructor (browser) {
    this.browser = browser
  }

  async launch (appConfiguration) {
    await this.browser.get(config.appUrl)
    await this.browser.wait(async () => (
      await this.browser.wait(appConfiguration.getReadyState()) === 'complete'
    ), 10000)
  }

  async launchCRM (appConfiguration) {
    await this.browser.get(config.appUrlCRM)
    await this.browser.wait(async () => (
      await this.browser.wait(appConfiguration.getReadyState()) === 'complete'
    ), 10000)
  }

  async takeScreenshots (filename) {
    const filenameNoSpecialChars = filename.substring(0, 250).replace(/[^a-z0-9]/gi, '_').toLowerCase()
    const titleDateStamp = '_>>>_' + filenameNoSpecialChars + Date.now() + '.png'
    if (!fs.existsSync('MartinScreenshots')) {
      fs.mkdirSync('MartinScreenshots')
    }
    this.browser.takeScreenshot().then(function (data) {
      var base64Data = data.replace(/^data:image\/png;base64,/, '')
      fs.writeFile('AllScreenshots/' + titleDateStamp, base64Data, 'base64', function (err) {
        if (err) console.log(err)
      })
    })
  }
}

module.exports = Application
