class Tasks {
  async checkCostAndProcessingTime (pages) {
    const {taskListPage, checkCostPage} = pages
    return taskListPage.completeTask('checkCostAndProcessingTime', async () => {
      return checkCostPage.completePage()
    })
  }

  async confirmOperationMeetsRules (pages) {
    const {taskListPage, confirmOperationMeetsRulesPage} = pages
    return taskListPage.completeTask('confirmOperationMeetsRules', async () => {
      return confirmOperationMeetsRulesPage.completePage()
    })
  }

  async confirmSuitableVehicleStorage (vehicleStorage = '', pages) {
    const {taskListPage, confirmSuitableVehicleStoragePage} = pages
    return taskListPage.completeTask('confirmSuitableVehicleStorage', async () => {
      return confirmSuitableVehicleStoragePage.completePage(vehicleStorage)
    })
  }

  async saveApplication (email = '', pages) {
    const {taskListPage, checkYourEmailPage, makeSureEmailIsRightPage, saveApplicationPage} = pages
    return taskListPage.completeTask('saveApplication', async () => {
      await saveApplicationPage.completePage(email)
      await makeSureEmailIsRightPage.completePage(email)
      return checkYourEmailPage.completePage()
    })
  }

  async contactDetails (contact = {}, pages) {
    const {taskListPage, contactDetailsPage} = pages
    return taskListPage.completeTask('contactDetails', async () => {
      return contactDetailsPage.completePage(contact)
    })
  }

  async individualPermitHolderDetails (individual = {}, pages) {
    const {taskListPage, permitHolderDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, convictionsPage, bankruptcyPage} = pages
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await permitHolderDetailsPage.completePage(individual)
      await permitHolderContactDetailsPage.completePage(individual)
      await permitHolderAddressSelectPage.completePage()
      await permitHolderAddressManualPage.completePage(individual)
      await convictionsPage.completePage(individual.convictions)
      return bankruptcyPage.completePage(individual.bankruptcy)
    })
  }

  async limitedCompanyPermitHolderDetails (limitedCompany = {}, pages) {
    const {taskListPage, companyNumberPage, companyCheckNamePage, directorsDateOfBirthPage, directorsEmailPage, convictionsPage, bankruptcyPage} = pages
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
    const {taskListPage, companyNumberPage, companyCheckNamePage, directorsDateOfBirthPage, directorsEmailPage, convictionsPage, bankruptcyPage} = pages
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await companyNumberPage.completePage(limitedLiabilityPartnership.number, companyNumberPage.limitedLiabilityPartnershipTitle)
      await companyCheckNamePage.completePage(limitedLiabilityPartnership, companyCheckNamePage.limitedLiabilityPartnershipTitle)
      await directorsDateOfBirthPage.completePage(limitedLiabilityPartnership.directors, directorsDateOfBirthPage.limitedLiabilityPartnershipTitle)
      await directorsEmailPage.completePage(limitedLiabilityPartnership.directors[0].email, directorsEmailPage.limitedLiabilityPartnershipTitle)
      await convictionsPage.completePage(limitedLiabilityPartnership.convictions)
      return bankruptcyPage.completePage(limitedLiabilityPartnership.bankruptcy)
    })
  }

  async soleTraderPermitHolderDetails (soleTrader = {}, pages) {
    const {taskListPage, permitHolderDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, permitHolderTradingNamePage, convictionsPage, bankruptcyPage} = pages
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await permitHolderDetailsPage.completePage(soleTrader)
      await permitHolderTradingNamePage.completePage(soleTrader)
      await permitHolderContactDetailsPage.completePage(soleTrader)
      await permitHolderAddressSelectPage.completePage()
      await permitHolderAddressManualPage.completePage(soleTrader)
      await convictionsPage.completePage(soleTrader.convictions)
      return bankruptcyPage.completePage(soleTrader.bankruptcy)
    })
  }

  async firePreventionPlan (files = [], pages) {
    const {taskListPage, firePreventionPlanPage} = pages
    return taskListPage.completeTask('firePreventionPlan', async () => {
      return firePreventionPlanPage.completePage(files)
    })
  }

  async wasteRecoveryPlan (state = '', files = [], pages) {
    const {taskListPage, wasteRecoverySelectPage, wasteRecoveryPlanPage} = pages
    return taskListPage.completeTask('wasteRecoveryPlan', async () => {
      await wasteRecoverySelectPage.completePage(state)
      return wasteRecoveryPlanPage.completePage(files)
    })
  }

  async siteNameAndLocation (site = {}, pages) {
    const {taskListPage, siteNamePage, gridReferencePage, siteAddressSelectPage, siteAddressManualPage} = pages
    return taskListPage.completeTask('siteNameAndLocation', async () => {
      await siteNamePage.completePage(site)
      await gridReferencePage.completePage(site)
      await siteAddressSelectPage.completePage()
      return siteAddressManualPage.completePage(site)
    })
  }

  async sitePlan (files = [], pages) {
    const {taskListPage, sitePlanPage} = pages
    return taskListPage.completeTask('sitePlan', async () => {
      return sitePlanPage.completePage(files)
    })
  }

  async proveTechnicalCompetence (competence = '', files = [], managersFiles = [], pages) {
    const {taskListPage, technicalCompetenceSelectPage, wamitabEvidencePage, gettingQualificationEvidencePage, deemedEvidencePage, esaeuEvidencePage, technicallyCompetentManagersPage} = pages
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
    const {taskListPage, invoiceAddressSelectPage, invoiceAddressManualPage} = pages
    return taskListPage.completeTask('invoicingDetails', async () => {
      await invoiceAddressSelectPage.completePage()
      return invoiceAddressManualPage.completePage(invoice)
    })
  }

  async confirmConfidentialityNeeds (details = '', pages) {
    const {taskListPage, confidentialityPage} = pages
    return taskListPage.completeTask('confirmConfidentialityNeeds', async () => {
      return confidentialityPage.completePage(details)
    })
  }
}

module.exports = new Tasks()
