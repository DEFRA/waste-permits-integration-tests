const PermitHolderDetailsPage = require('./permitHolderDetails.page')

class MemberDetailsPage extends PermitHolderDetailsPage {
  get title () { return 'Add another partner' }
  get firstTitle () { return 'Add the first partner' }
  get groupTitle () { return 'Add another postholder' }
  get groupFirstTitle () { return 'Add the first postholder' }
}

module.exports = MemberDetailsPage
