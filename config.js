const commandLineArgs = require('command-line-args')
require('dotenv').config()

const {
  APP_URL = 'http://localhost:8000',
  NODE_ENV = 'production',
  PLATFORM = 'chrome-desktop-test',
  WIDTH = '1070',
  HEIGHT = '1180',
  TIMEOUT = '240000'
} = process.env

const optionDefinitions = [
  { name: 'appUrl', type: String, defaultValue: APP_URL },
  { name: 'appUrlCRM', type: String },
  { name: 'format', type: String },
  { name: 'format-options', type: JSON.parse },
  { name: 'loadChromeNmpExtension', type: Boolean, defaultOption: false },
  { name: 'require', type: String },
  { name: 'timeout', alias: 't', type: Number, defaultValue: parseInt(`${TIMEOUT}`) },
  { name: 'world-parameters', type: JSON.parse, defaultValue: { platform: PLATFORM, width: parseInt(`${WIDTH}`), height: parseInt(`${HEIGHT}`) } },
  { name: 'env', type: String, defaultValue: NODE_ENV }
]

const config = commandLineArgs(optionDefinitions, {partial: true})

module.exports = config
