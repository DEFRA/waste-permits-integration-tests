const mkdirp = require('mkdirp')
const { driver } = require('./driver')
const { 'world-parameters': { platform }, appUrl, appUrlCRM } = require('../../config')

let frontEndVersion
let backEndVersion

const { After, AfterAll, BeforeAll, Status } = require('cucumber')

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

BeforeAll(function () {
  // Make sure the reports directory exists
  mkdirp(options.jsonDir)
})

AfterAll(function () {
  const reporter = require('cucumber-html-reporter')
  reporter.generate(options)
})

After(async function (testCase) {
  if (testCase.result.status === Status.FAILED) {
    const filename = await driver.browser.getCurrentUrl()
    driver.takeScreenshotsAfterFailure(filename)
    return driver.quitBrowser()
  } else {
    return driver.quitBrowser()
  }
})
