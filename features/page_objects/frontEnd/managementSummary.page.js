const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class ManagementSummaryPage extends UploadPageObject {
  get title () { return 'Complete and upload a site condition report' }
}

module.exports = ManagementSummaryPage
