const {setWorldConstructor, setDefaultTimeout} = require('cucumber')

const driver = require('./driver').driver
const Pages = require('../page_objects/pages')
const Application = require('./application')
const AppConfiguration = require('./app-configuration')
const {'world-parameters': parameters, timeout} = require('../../config')

class CustomWorld {
  constructor ({attach}) {
    this.attach = attach
    this.parameters = parameters
    console.log('PARAM' + JSON.stringify(parameters))
    const browser = driver.getBrowser(parameters)
    this.pages = new Pages(browser, this.testdata)
    this.application = new Application(browser)
    this.appConfiguration = new AppConfiguration(browser)
  }
}

setDefaultTimeout(timeout)
setWorldConstructor(CustomWorld)
