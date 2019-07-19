const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class ScreeningToolPage extends UploadPageObject {
  get title () { return 'Upload the completed screening tool' }
}

module.exports = ScreeningToolPage
