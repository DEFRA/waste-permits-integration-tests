const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class WamitabEvidencePage extends UploadPageObject {
  get title () { return 'WAMITAB or EPOC: upload your evidence' }
}

module.exports = WamitabEvidencePage
