const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class UploadWasteTypesPage extends UploadPageObject {
  get title () { return 'Upload the waste codes for your activities' }
}

module.exports = UploadWasteTypesPage
