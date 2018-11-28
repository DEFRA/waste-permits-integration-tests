const PermitHolderDetailsPage = require('./permitHolderDetails.page')

class PartnershipDetailsPage extends PermitHolderDetailsPage {
  get title () { return 'Add another partner' }
  get firstTitle () { return 'Add the first partner' }
}

module.exports = PartnershipDetailsPage
