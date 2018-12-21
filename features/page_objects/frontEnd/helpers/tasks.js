class Tasks {
  constructor (world) {
    this.__world = world
    this.__testdata = world.data
  }

  get data () {
    return this.__testdata
  }

  get world () {
    return this.__world
  }

  async checkCostAndProcessingTime (pages) {
    const {taskListPage, checkCostPage} = pages.frontEnd
    return taskListPage.completeTask('checkCostAndProcessingTime', async () => {
      return checkCostPage.completePage()
    })
  }

  async checkCostAndProcessingTimeValidations (cost, pages) {
    const {taskListPage, checkCostPage} = pages.frontEnd
    return taskListPage.completeTask('checkCostAndProcessingTime', async () => {
      return checkCostPage.completePageValidation(cost)
    })
  }

  async confirmOperationMeetsRules (pages) {
    const {taskListPage, confirmOperationMeetsRulesPage} = pages.frontEnd
    return taskListPage.completeTask('confirmOperationMeetsRules', async () => {
      return confirmOperationMeetsRulesPage.completePage()
    })
  }

  async confirmOperationMeetsRulesValidation (link, pages) {
    const {taskListPage, confirmOperationMeetsRulesPage} = pages.frontEnd
    return taskListPage.completeTask('confirmOperationMeetsRules', async () => {
      return confirmOperationMeetsRulesPage.completePageValidation(link)
    })
  }

  async confirmSuitableVehicleStorage (vehicleStorage = '', pages) {
    const {taskListPage, confirmSuitableVehicleStoragePage} = pages.frontEnd
    return taskListPage.completeTask('confirmSuitableVehicleStorage', async () => {
      return confirmSuitableVehicleStoragePage.completePage(vehicleStorage)
    })
  }

  async saveApplication (email = '', pages) {
    const {taskListPage, checkYourEmailPage, makeSureEmailIsRightPage, saveApplicationPage} = pages.frontEnd
    return taskListPage.completeTask('saveApplication', async () => {
      await saveApplicationPage.completePage(email)
      await makeSureEmailIsRightPage.completePage(email)
      return checkYourEmailPage.completePage()
    })
  }

  async contactDetails (contact = {}, pages) {
    const {taskListPage, contactDetailsPage} = pages.frontEnd
    return taskListPage.completeTask('contactDetails', async () => {
      return contactDetailsPage.completePage(contact)
    })
  }

  async enterCardDetails (card = {}, pages) {
    const { cardPaymentPage } = pages.frontEnd
    return cardPaymentPage.completePage(card)
  }

  async individualPermitHolderDetails (individual = {}, pages) {
    const {taskListPage, permitHolderDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, convictionsPage, bankruptcyPage} = pages.frontEnd
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await permitHolderDetailsPage.completePage(individual)
      await permitHolderContactDetailsPage.completePage(individual)
      await this.addressDetails(individual, permitHolderAddressSelectPage, permitHolderAddressManualPage)
      await convictionsPage.completePage(individual.convictions)
      return bankruptcyPage.completePage(individual.bankruptcy)
    })
  }

  async limitedCompanyPermitHolderDetails (limitedCompany = {}, pages) {
    const {taskListPage, companyNumberPage, companyCheckNamePage, directorsDateOfBirthPage, directorsEmailPage, convictionsPage, bankruptcyPage} = pages.frontEnd
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await companyNumberPage.completePage(limitedCompany.number)
      await companyCheckNamePage.completePage(limitedCompany)
      await directorsDateOfBirthPage.completePage(limitedCompany.directors)
      await directorsEmailPage.completePage(limitedCompany.directors[0].email)
      await convictionsPage.completePage(limitedCompany.convictions)
      return bankruptcyPage.completePage(limitedCompany.bankruptcy)
    })
  }

  async limitedLiabilityPartnershipPermitHolderDetails (limitedLiabilityPartnership = {}, pages) {
    const {taskListPage, companyNumberPage, companyCheckNamePage, directorsDateOfBirthPage, directorsEmailPage, convictionsPage, bankruptcyPage} = pages.frontEnd
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await companyNumberPage.completePage(limitedLiabilityPartnership.number, companyNumberPage.limitedLiabilityPartnershipTitle)
      await companyCheckNamePage.completePage(limitedLiabilityPartnership, companyCheckNamePage.limitedLiabilityPartnershipTitle)
      await directorsDateOfBirthPage.completePage(limitedLiabilityPartnership.directors, directorsDateOfBirthPage.limitedLiabilityPartnershipTitle)
      await directorsEmailPage.completePage(limitedLiabilityPartnership.directors[0].email, directorsEmailPage.limitedLiabilityPartnershipTitle)
      await convictionsPage.completePage(limitedLiabilityPartnership.convictions)
      return bankruptcyPage.completePage(limitedLiabilityPartnership.bankruptcy)
    })
  }

  async publicBodyPermitHolderDetails (publicBody = {}, pages) {
    const {taskListPage, publicBodyAddressManualPage, publicBodyAddressSelectPage, publicBodyTradingNamePage, publicBodyOfficerPage, publicBodyBankruptcyPage, publicBodyConvictionsPage} = pages.frontEnd
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await publicBodyTradingNamePage.completePage(publicBody)
      await this.addressDetails(publicBody, publicBodyAddressSelectPage, publicBodyAddressManualPage)
      await publicBodyOfficerPage.completePage(publicBody)
      await publicBodyConvictionsPage.completePage(publicBody.convictions)
      await publicBodyBankruptcyPage.completePage(publicBody.bankruptcy)
    })
  }

  async soleTraderPermitHolderDetails (soleTrader = {}, pages) {
    const {taskListPage, permitHolderDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, permitHolderTradingNamePage, convictionsPage, bankruptcyPage} = pages.frontEnd
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await permitHolderDetailsPage.completePage(soleTrader)
      await permitHolderTradingNamePage.completePage(soleTrader)
      await permitHolderContactDetailsPage.completePage(soleTrader)
      await this.addressDetails(soleTrader, permitHolderAddressSelectPage, permitHolderAddressManualPage)
      await convictionsPage.completePage(soleTrader.convictions)
      return bankruptcyPage.completePage(soleTrader.bankruptcy)
    })
  }

  async partnershipPermitHolderDetails (partnership = {}, pages) {
    const {taskListPage, partnershipListPage, partnershipDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, partnershipTradingNamePage, convictionsPage, bankruptcyPage} = pages.frontEnd
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await partnershipTradingNamePage.completePage(partnership)
      const {partners} = partnership
      for (let index = 0; index < partners.length; index++) {
        const partner = partners[index]
        const contactDetailsTitle = index ? partnershipDetailsPage.title : partnershipDetailsPage.firstTitle
        await partnershipDetailsPage.completePage(partner, contactDetailsTitle)
        await permitHolderContactDetailsPage.completePage(partner, `What are the contact details for ${partner.firstName} ${partner.lastName}?`)
        await this.addressDetails(partner, permitHolderAddressSelectPage, permitHolderAddressManualPage, `What is the address for ${partner.firstName} ${partner.lastName}?`)
        await partnershipListPage.waitForPage()
        if (!index || index === partners.length - 1) {
          // Add second and last partner
          await partnershipListPage.click(partnershipListPage.continueButton)
        } else {
          // Add all other partners
          await partnershipListPage.click(partnershipListPage.addPartnerLink)
        }
      }
      await convictionsPage.completePage(partnership.convictions)
      return bankruptcyPage.completePage(partnership.bankruptcy)
    })
  }

  async permitHolderDetails (permitHolder, data, pages) {
    const {individual, limitedCompany, limitedLiabilityPartnership, partnership, publicBody, soleTrader} = data
    switch (permitHolder.toLowerCase()) {
      case 'individual': {
        return this.individualPermitHolderDetails(individual, pages)
      }
      case 'limited company': {
        return this.limitedCompanyPermitHolderDetails(limitedCompany, pages)
      }
      case 'limited liability partnership': {
        return this.limitedLiabilityPartnershipPermitHolderDetails(limitedLiabilityPartnership, pages)
      }
      case 'partnership': {
        return this.partnershipPermitHolderDetails(partnership, pages)
      }
      case 'public body': {
        return this.publicBodyPermitHolderDetails(publicBody, pages)
      }
      case 'sole trader': {
        return this.soleTraderPermitHolderDetails(soleTrader, pages)
      }
      default:
        throw new Error(`Todo: Support for "${permitHolder}"`)
    }
  }

  async firePreventionPlan (files = [], pages) {
    const {taskListPage, firePreventionPlanPage} = pages.frontEnd
    return taskListPage.completeTask('firePreventionPlan', async () => {
      return firePreventionPlanPage.completePage(files)
    })
  }

  async wasteRecoveryPlan (state = '', files = [], pages) {
    const {taskListPage, wasteRecoverySelectPage, wasteRecoveryPlanPage} = pages.frontEnd
    return taskListPage.completeTask('wasteRecoveryPlan', async () => {
      await wasteRecoverySelectPage.completePage(state)
      return wasteRecoveryPlanPage.completePage(files)
    })
  }

  async confirmMiningWaste (miningWaste = {}, pages) {
    const {taskListPage, confirmMiningWastePage, miningWasteWeightPage} = pages.frontEnd
    return taskListPage.completeTask('miningWaste', async () => {
      await confirmMiningWastePage.completePage(miningWaste)
      return miningWasteWeightPage.completePage(miningWaste)
    })
  }

  async siteNameAndLocation (site = {}, pages) {
    const {taskListPage, siteNamePage, gridReferencePage, siteAddressSelectPage, siteAddressManualPage} = pages.frontEnd
    return taskListPage.completeTask('siteNameAndLocation', async () => {
      await siteNamePage.completePage(site)
      await gridReferencePage.completePage(site)
      await this.addressDetails(site, siteAddressSelectPage, siteAddressManualPage)
    })
  }

  async sitePlan (files = [], pages) {
    const {taskListPage, sitePlanPage} = pages.frontEnd
    return taskListPage.completeTask('sitePlan', async () => {
      return sitePlanPage.completePage(files)
    })
  }

  async proveTechnicalCompetence (competence = '', files = [], managersFiles = [], pages) {
    const {taskListPage, technicalCompetenceSelectPage, wamitabEvidencePage, gettingQualificationEvidencePage, deemedEvidencePage, esaeuEvidencePage, technicallyCompetentManagersPage} = pages.frontEnd
    return taskListPage.completeTask('technicalCompetence', async () => {
      await technicalCompetenceSelectPage.completePage(competence)
      switch (competence.toLowerCase()) {
        case 'wamitab': {
          await wamitabEvidencePage.completePage(files)
          break
        }
        case 'getting qualification': {
          await gettingQualificationEvidencePage.completePage(files)
          break
        }
        case 'deemed': {
          await deemedEvidencePage.completePage(files)
          break
        }
        case 'esa eu': {
          return esaeuEvidencePage.completePage(files)
        }
        default:
          throw new Error(`Todo: Support for "${competence}"`)
      }
      return technicallyCompetentManagersPage.completePage(managersFiles)
    })
  }

  async invoicingDetails (invoice = {}, pages) {
    const {taskListPage, invoiceAddressSelectPage, invoiceAddressManualPage, invoiceContactPage} = pages.frontEnd
    return taskListPage.completeTask('invoicingDetails', async () => {
      await this.addressDetails(invoice, invoiceAddressSelectPage, invoiceAddressManualPage)
      return invoiceContactPage.completePage(invoice)
    })
  }

  async confirmConfidentialityNeeds (details = '', pages) {
    const {taskListPage, confidentialityPage} = pages.frontEnd
    return taskListPage.completeTask('confirmConfidentialityNeeds', async () => {
      return confidentialityPage.completePage(details)
    })
  }

  async addressDetails (address, addressSelectPage, addressManualPage, title) {
    if (this.data.selectAddress) {
      return addressSelectPage.completePage(address, title)
    }
    await addressSelectPage.completePage(address, title)
    return addressManualPage.completePage(address, title)
  }

  async makePayment (cardDetails = {}, paymentType, pages) {
    const {applicationReceivedPage, bacsPaymentPage, paymentTypePage, cardPaymentPage, confirmPaymentPage} = pages.frontEnd
    await paymentTypePage.completePage(paymentType)
    switch (paymentType.toLowerCase()) {
      case 'card': {
        await cardPaymentPage.completePage(cardDetails)
        await confirmPaymentPage.completePage()
        break
      }
      case 'bacs': {
        await bacsPaymentPage.completePage()
        break
      }
      default:
        throw new Error(`Unknown payment type "${paymentType}"`)
    }
    return applicationReceivedPage.completePage(paymentType)
  }
}

module.exports = Tasks
