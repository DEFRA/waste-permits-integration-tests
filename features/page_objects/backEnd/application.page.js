const CRMPageObject = require('./base/CRMPageObject').CRMPageObject
// const config = require('../../../config')

class ApplicationPage extends CRMPageObject {
  get title () { return 'Microsoft Dynamics 365\nGo to home page.' }

  get LPTab () { return { id: 'TabLP' } }
  // get ApplicationsTab () { return { xpath: "//span[@class = 'nav - rowLabel' and (text() = 'Applications' or . = 'Applications')]" } }
  get ApplicationsTab () { return { xpath: "//a[@id = 'NewSubArea_6977dd' and @title = 'Applications' and @href = '/main.aspx?area=NewSubArea_6977dd&etc=10013&page=LP&pageType=EntityList&web=true' and (text() = 'Applications' or . = 'Applications')]" } }
  get searchClick () { return { xpath: "//span[@title = 'Start search' and @class = 'navImageFlipHorizontal']" } }
  get enterSearch () { return { xpath: "//input[@id = 'search' and @type = 'text']" } }
  get doSearch () { return { xpath: "//img[@title = 'Start search' and @id = 'findCriteriaImg' and @alt = 'Start search' and @src = '/_imgs/search_grey_16.png']" } }

  // #attribone
  // //*[@id="Record_10013_ea3d279fd9f6e811a990000d3a2065c5"]/div
  // //*[@id="Record_10013_ea3d279fd9f6e811a990000d3a2065c5"]

  // class="listItem listItemMargin"
  // title="WE3581QB/A001"
  // entityrecordtypecode="10013"
  // tabindex="0"

  get enterSearch1 () { return { xpath: '//*[@id="crmGrid_findCriteria"]' } }
  get doSearch1 () { return { css: 'id("crmGrid_findCriteriaButton")/span[1]' } }

  get clickFind () { return { css: 'td.ms-crm-List-NonDataCell:nth-child(1)' } }

  // .ms-crm-List-Row

  get parents () { return { xpath: "//iframe[@id = 'contentIFrame0' and @name = 'contentIFrame0' and @title = 'Content Area']" } }

  get clickApplication () { return { xpath: '//*[@id="Record_10013_ea3d279fd9f6e811a990000d3a2065c5"]' } }
  get parent () { return { xpath: "//iframe[@id = 'contentIFrame1' and @name = 'contentIFrame1' and @title = 'Content Area']" } }
  get elem () { return { xpath: '//*[@id="attribone"]' } }

  async completePage (appNo) {
    // await this.waitForPage()
    await this.sleep(4000)
    await this.waitUntilLoaded(this.LPTab)
    await this.click(this.LPTab)
    await this.waitUntilLoaded(this.ApplicationsTab)
    await this.click(this.ApplicationsTab)
    await this.sleep(4000)
    await this.waitUntilLoaded(this.enterSearch)
    await this.input(this.enterSearch1, 'WE3582QB/A001')
    await this.waitUntilLoaded(this.doSearch)
    await this.click(this.doSearch)
    await this.sleep(4000)

    // await this.click(this.clickFind)
  }
}

module.exports = ApplicationPage
