const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class MemberListPage extends FrontEndPageObject {
  get title () { return 'Business partners you have added to this application' }
  get groupTitle () { return 'Postholders you have added' }

  get addMemberLink () { return { css: '#add-another-member-link' } }
}

module.exports = MemberListPage
