const PageObject = require('./base/PageObject').PageObject

class ConfirmSuitableVehicleStoragePage extends PageObject {
  get title () { return 'Where does the vehicle storage area drain to?' }

  get sewerUnderConsentRadio () { return {css: '#sewer'} }
  get blindSumpRadio () { return {css: '#blind-sump'} }
  get oilSeparatorRadio () { return {css: '#oil-separator'} }
  get watercourseRadio () { return {css: '#watercourse'} }

  async completePage (vehicleStorage) {
    await this.waitForPage()

    switch (vehicleStorage.toLowerCase()) {
      case 'has a sewer under consent':
        await this.click(this.sewerUnderConsentRadio)
        break
      case 'has a blind pump':
        await this.click(this.blindSumpRadio)
        break
      case 'has an oil separator':
        await this.click(this.oilSeparatorRadio)
        break
      case 'has a watercourse':
        await this.click(this.watercourseRadio)
        break
      default:
        throw new Error(`Unknown vehicle storage: ${vehicleStorage}`)
    }

    return this.click(this.continueButton)
  }
}

module.exports = ConfirmSuitableVehicleStoragePage
