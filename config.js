const commandLineArgs = require('command-line-args')

const optionDefinitions = [
  { name: 'appUrl', type: String, defaultValue: 'http://localhost:8000' },
  { name: 'appUrlCRM', type: String },
  { name: 'format', type: String },
  { name: 'format-options', type: JSON.parse },
  { name: 'loadChromeNmpExtension', type: Boolean, defaultOption: false },
  { name: 'require', type: String },
  { name: 'timeout', alias: 't', type: Number, defaultValue: 240000 },
  { name: 'world-parameters', type: JSON.parse, defaultValue: { platform: 'chrome-desktop-test', width: 1070, height: 1180 } },
  { name: 'env', type: String, defaultValue: 'production' }
]

const config = commandLineArgs(optionDefinitions, {partial: true})

module.exports = config
