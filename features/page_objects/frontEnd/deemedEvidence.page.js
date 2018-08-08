const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class DeemedEvidencePage extends UploadPageObject {
  get title () { return 'Deemed competence or an assessment: upload your evidence' }
}

module.exports = DeemedEvidencePage
