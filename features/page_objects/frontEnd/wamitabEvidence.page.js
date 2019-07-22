const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class WamitabEvidencePage extends UploadPageObject {
  get title () { return 'WAMITAB or EPOC: check what you need to upload' }
}

module.exports = WamitabEvidencePage
