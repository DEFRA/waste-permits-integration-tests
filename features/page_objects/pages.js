/* This loads all the page object classes and creates an object of their instances */
const PageObject = require('./base/PageObject').PageObject

function validatePageEntries (object) {
  if (object instanceof PageObject) return
  Object.entries(object).forEach(([pageObjectName, pageObject]) => {
    const expectedPageObject = `${pageObjectName[0].toUpperCase()}${pageObjectName.substr(1)}`
    if (expectedPageObject !== pageObject.constructor.name) {
      throw new Error(`Mismatching page object: ${pageObjectName} !== ${pageObject.constructor.name}`)
    }
  })
}

class Pages {
  constructor (browser, data) {
    const pageObjects = require('require-all')({
      dirname: __dirname,
      filter: /(.+.page).js$/,
      map: (name) => name.replace('.page', 'Page'),
      resolve: (PageObject) => new PageObject(browser, data)
    })
    Object.entries(pageObjects).forEach(([name, object]) => {
      validatePageEntries(object)
      this[name] = object
    // this.log('*********************************', object)
    })
  }
}

module.exports = Pages
