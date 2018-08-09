/* eslint prefer-arrow-callback: off */ // IE does not support arrow functions. We cannot inject ES6.
/* global $U */

// const interceptor = require('../interceptions/xhri').interceptor
// const interceptorHelper = require('../interceptions/xhri-util').interceptorHelper
// const getInterceptions = require('../interceptions/get').getInterceptions
// const postInterceptions = require('../interceptions/post').postInterceptions

class AppConfiguration {
  constructor (browser) {
    this.browser = browser
  }

  getConfigForFeature (feature) {
    let injectConfig
    switch (feature) {
      default:
        injectConfig = function () { /* default */ }
    }
    return injectConfig
  }

  /**
   * Public methods
   */
  setConfigForFeature (feature) {
    this.browser.executeScript(this.getConfigForFeature(feature))
  }

  startApp () {
    this.browser.executeScript(function () {
      $U.core.Launch.initialise()
    })
  }

  getReadyState () {
    return this.browser.executeScript('return document.readyState')
  }

  injectInterceptor () {
    // this.browser.executeScript(interceptor);
    // this.browser.executeScript(interceptorHelper);
    // this.browser.executeScript(getInterceptions);
    // this.browser.executeScript(postInterceptions);
  }
}

module.exports = AppConfiguration
