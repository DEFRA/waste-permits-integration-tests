const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class PermitCategorySelectPage extends FrontEndPageObject {
  get title () { return 'What do you want the permit for?' }

  get 'Anaerobic digestion including storing digestate' () { return {css: '#chosen-category-anaerobic-input'} }
  get 'Car and vehicle dismantling' () { return {css: '#chosen-category-car-input'} }
  get 'Composting, sewage or sludge treatment, biogas' () { return {css: '#chosen-category-composting-input'} }
  get 'Deposit for recovery' () { return {css: '#chosen-category-deposit-input'} }
  get 'Electrical insulating oil storage' () { return {css: '#chosen-category-electrical-input'} }
  get 'Flood risk activities' () { return {css: '#chosen-category-flood-input'} }
  get 'Metal recycling, scrap metal and WEEE - not cars or vehicles' () { return {css: '#chosen-category-metal-input'} }
  get 'Mining, oil and gas' () { return {css: '#chosen-category-mining-input'} }
  get 'Mobile plant for land-spreading or treatment' () { return {css: '#chosen-category-mobile-input'} }
  get 'Radioactive substances for non-nuclear sites' () { return {css: '#chosen-category-radioactive-input'} }
  get 'Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment' () { return {css: '#chosen-category-storage-input'} }
  get 'Waste transfer station or amenity site with or without treatment' () { return {css: '#chosen-category-transfer-input'} }
  get 'Water discharges' () { return {css: '#chosen-category-water-input'} }

  async completePage (permitCategory) {
    await this.waitForPage()
    await this.click(this[permitCategory])
    return this.click(this.continueButton)
  }
}

module.exports = PermitCategorySelectPage
