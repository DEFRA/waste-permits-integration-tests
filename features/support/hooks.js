const mkdirp = require('mkdirp')
const { driver } = require('./driver')
const {'world-parameters': {platform}, appUrl, appUrlCRM} = require('../../config')

let frontEndVersion
let backEndVersion

var {After, Before, registerHandler} = require('cucumber')

Before(function ({scenario}) {
  // scenario.attach(getWorldParameters().platform)
})

After(function () {
// Moved this to ScenarioResult below
// return driver.quitBrowser()
})

registerHandler('BeforeFeatures', ([feature]) => {
  const options = {
    theme: 'bootstrap',
    jsonDir: 'features/reports',
    output: 'features/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    ignoreBadJsonFile: true,
    metadata: {
      'App Version': 'Waste Permits',
      'FrontEnd Test Environment': appUrl,
      'BackEnd Test Environment': appUrlCRM,
      'FrontEnd Version': frontEndVersion,
      'BackEnd Version': backEndVersion,
      Browser: platform,
      // Platform: "Windows 10",
      Parallel: 'Scenarios',
      Executed: 'local'
    }
  }
  // Make sure the reports directory exists
  mkdirp(options.jsonDir)
  if (feature) {
    feature.options = options
  }
})

registerHandler('AfterFeatures', ([{options}]) => {
  const reporter = require('cucumber-html-reporter')
  reporter.generate(options)
})

registerHandler('ScenarioResult', function (scenario) {
  if (scenario.status === 'failed') {
    driver.takeScreenshots1('Screenshots1')
    return driver.quitBrowser()
  } else {
    return driver.quitBrowser()
  }
})
