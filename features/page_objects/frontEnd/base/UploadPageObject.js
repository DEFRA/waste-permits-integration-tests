const FrontEndPageObject = require('./FrontEndPageObject').FrontEndPageObject

class UploadPageObject extends FrontEndPageObject {
  get uploadFileInput () { return { css: '#file' } }
  get uploadFileCheckbox () { return { css: '#is-upload-file' } }

  fileUploaded (index) { return { css: `#file-${index}` } }

  async _uploadFile (file, index) {
    if (index > 0) {
      await this.click(this.uploadFileCheckbox)
    }
    await this.input(this.uploadFileInput, file.name)
    await this.click(this.continueButton)
    return this.waitUntilLoaded(this.fileUploaded(index))
  }

  async completePage (files) {
    await this.waitForPage()
    let index = 0

    while (index < files.length) {
      await this._uploadFile(files[index], index)
      index++
    }

    return this.click(this.continueButton)
  }
}

module.exports = { UploadPageObject }
