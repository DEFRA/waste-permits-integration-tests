const UploadPageObject = require('./base/UploadPageObject').UploadPageObject

class McpDetailsPage extends UploadPageObject {
  get title () { return 'Upload the completed plant or generator list template' }
}

module.exports = McpDetailsPage
