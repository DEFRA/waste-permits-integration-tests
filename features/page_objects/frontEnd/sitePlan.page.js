const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class SitePlanPage extends UploadPageObject {
  get title () { return 'Upload the site plan' }
}

module.exports = SitePlanPage
