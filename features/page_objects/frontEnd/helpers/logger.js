
const fs = require('fs-extra')

// append data to file
module.exports = class Logger {
  constructor (filename) {
    this.filename = filename
  }

  log (data) {
    fs.ensureFile(this.filename, (err) => {
      if (err) throw err
      // file has now been created, including the directory it is to be placed in
      fs.appendFile(this.filename, data + '\n', 'utf8', (err) => {
        if (err) throw err
        // if no error
        console.log(`Data is appended to ${this.filename} successfully.`)
      })
    })
  }
}
