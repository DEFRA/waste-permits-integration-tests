const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ActivitiesSelectPage extends FrontEndPageObject {
  get title () { return 'Add an activity to the permit' }
  get wastetypetitle () { return 'Do you accept any of these types of waste?' }

  get addAnotherActivityButton () { return {css: '#add-activity-submit'}}

  get clinicalWasteCheckBox () { return {css: '#clinical'}}
  get combustibleWasteCheckBox () { return {css: '#combustible'}}
  get hazardousWasteCheckBox () { return {css: '#hazardous'}}
  get noWasteCheckBox () { return {css: '#none-required'}}


  get 'Clinical waste transfer station' () { return {css: '#activity-1-16-7-input'} }
  get 'Biological treatment of waste - not composting' () { return {css: '#activity-1-16-19-input'} }
  get 'Chemical treatment of waste' () { return {css: '#activity-1-16-17-input'} }
  get 'Composting facility' () { return {css: '#activity-1-16-18-input'} }
  get 'Fuel production from waste or treatment of waste water - Section 5.5 and 5.7' () { return {css: '#activity-1-16-3-input'} }
  get 'Hazardous waste storage - temporary or in underground storage - section 5.6' () { return {css: '#activity-1-16-4-input'} }
  get 'Hazardous waste transfer station' () { return {css: '#activity-1-16-5-input'} }
  get 'Household waste amenity site taking hazardous waste' () { return {css: '#activity-1-16-9-input'} }
  get 'Household waste amenity site taking non-hazardous waste only' () { return {css: '#activity-1-16-8-input'} }
  get 'Household, commercial and industrial waste transfer station' () { return {css: '#activity-1-16-6-input'} }
  get 'Management of inert extractive wastes at mines and quarries' () { return {css: '#activity-1-11-2-input'} }
  get 'Material recycling facility' () { return {css: '#activity-1-16-11-input'} }
  get 'Metal recycling site - mixed metals' () { return {css: '#activity-1-16-16-input'} }
  get 'Mobile plant – treatment of waste - not land spreading' () { return {css: '#activity-1-16-74-input'} }
  get 'Physical and chemical treatment of waste' () { return {css: '#activity-1-16-14-input'} }
  get 'Physical treatment of hazardous waste' () { return {css: '#activity-1-16-13-input'} }
  get 'Transfer station taking nonbiodegradable wastes' () { return {css: '#activity-1-16-10-input'} }
  get 'Metal recycling site - vehicle dismantling' () { return {css: '#activity-1-16-15-input'} }

  async completePage (activities) {
    await this.waitForPage()
    await this.click(this[activities])
    return this.click(this.continueButton)
  }

  async findText (text) {
    return this.checkText(text)
  }

  async dontfindText (text) {
    return this.checkNoText(text)
  }
  async addAnotherActivity (activities) {
    await this.click(this.addAnotherActivityButton)
    await this.waitForPage()
    await this.click(this[activities])
    return this.click(this.continueButton)
  }

  async selectWasteType(){
    await this.click(this.continueButton)
    await this.waitForPage(this.wastetypetitle)
    await this.click(this.clinicalWasteCheckBox)
    await this.click(this.combustibleWasteCheckBox)
    await this.click(this.hazardousWasteCheckBox)
    return this.click(this.continueButton)
  }

   
}

module.exports = ActivitiesSelectPage
