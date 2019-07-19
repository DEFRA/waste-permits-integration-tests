const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class NonTechnicalSummaryPage extends UploadPageObject {
  get title () { return 'Upload a non-technical summary' }
}

module.exports = NonTechnicalSummaryPage
