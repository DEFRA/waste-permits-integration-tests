/* This loads all the page object classes and creates an object of their instances */

class Pages {
  constructor (browser, testdata) {
    const pageObjects = require('require-all')({
      dirname: __dirname,
      filter: /(.+).page.js$/,
      map: (name) => `${name}Page`,
      resolve: (FrontEndPageObject) => new FrontEndPageObject(browser, testdata)
    })
    Object.entries(pageObjects).forEach(([name, pageObject]) => {
      this[name] = pageObject
    })
  }
}

module.exports = Pages
