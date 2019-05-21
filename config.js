const commandLineArgs = require('command-line-args')
require('dotenv').config()

const {
  APP_URL = 'http://localhost:8000',
  APP_URL_CRM = 'http://localhost:8000',
  PSC_CRM_USER = 'enter name',
  PSC_CRM_PASSWORD = 'enter pass',
  AUTHORITY_HOST_URL = 'http://localhost:8000',
  TENANT = 'tenant',
  CLIENT_ID = 'clientid',
  CLIENT_SECRET = 'Clientsecret',
  SEND_URL = 'http://localhost:8000',
  RESOURCE = 'resource',
  NODE_ENV = 'production',
  PLATFORM = 'firefox-desktop-test',
  WIDTH = '1070',
  HEIGHT = '1180',
  TIMEOUT = '240000'
} = process.env

const optionDefinitions = [
  { name: 'appUrl', type: String, defaultValue: APP_URL },
  { name: 'appUrlCRM', type: String, defaultValue: APP_URL_CRM },
  { name: 'user1PSCCRM', type: String, defaultValue: PSC_CRM_USER },
  { name: 'pass1PSCCRM', type: String, defaultValue: PSC_CRM_PASSWORD },
  { name: 'authorityHostUrl', type: String, defaultValue: AUTHORITY_HOST_URL },
  { name: 'tenant', type: String, defaultValue: TENANT },
  { name: 'clientID', type: String, defaultValue: CLIENT_ID },
  { name: 'clientSecret', type: String, defaultValue: CLIENT_SECRET },
  { name: 'sendUrl', type: String, defaultValue: SEND_URL },
  { name: 'resource', type: String, defaultValue: RESOURCE },
  { name: 'format', type: String },
  { name: 'format-options', type: JSON.parse, lazyMultiple: true },
  { name: 'loadChromeNmpExtension', type: Boolean, defaultOption: false },
  { name: 'require', type: String },
  { name: 'timeout', alias: 't', type: Number, defaultValue: parseInt(`${TIMEOUT}`) },
  { name: 'world-parameters', type: JSON.parse, defaultValue: { platform: PLATFORM, width: parseInt(`${WIDTH}`), height: parseInt(`${HEIGHT}`) } },
  { name: 'env', type: String, defaultValue: NODE_ENV }
]

const config = commandLineArgs(optionDefinitions, { partial: true })

module.exports = config
