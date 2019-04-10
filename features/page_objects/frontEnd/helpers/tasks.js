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
    const { taskListPage, checkCostPage } = pages.frontEnd
    return taskListPage.completeTask('checkCostAndProcessingTime', async () => {
      return checkCostPage.completePage()
    })
  }

  async checkCostAndProcessingTimeValidations (cost, pages) {
    const { taskListPage, checkCostPage } = pages.frontEnd
    return taskListPage.completeTask('checkCostAndProcessingTime', async () => {
      return checkCostPage.completePageValidation(cost)
    })
  }

  async confirmOperationMeetsRules (pages) {
    const { taskListPage, confirmOperationMeetsRulesPage } = pages.frontEnd
    return taskListPage.completeTask('confirmOperationMeetsRules', async () => {
      return confirmOperationMeetsRulesPage.completePage()
    })
  }

  async confirmOperationMeetsRulesValidation (link, pages) {
    const { taskListPage, confirmOperationMeetsRulesPage } = pages.frontEnd
    return taskListPage.completeTask('confirmOperationMeetsRules', async () => {
      return confirmOperationMeetsRulesPage.completePageValidation(link)
    })
  }

  async confirmSuitableVehicleStorage (vehicleStorage = '', pages) {
    const { taskListPage, confirmSuitableVehicleStoragePage } = pages.frontEnd
    return taskListPage.completeTask('confirmSuitableVehicleStorage', async () => {
      return confirmSuitableVehicleStoragePage.completePage(vehicleStorage)
    })
  }

  async saveApplication (email = '', pages) {
    const { taskListPage, checkYourEmailPage, makeSureEmailIsRightPage, saveApplicationPage } = pages.frontEnd
    return taskListPage.completeTask('saveApplication', async () => {
      await saveApplicationPage.completePage(email)
      await makeSureEmailIsRightPage.completePage(email)
      return checkYourEmailPage.completePage()
    })
  }

  async contactDetails (contact = {}, pages) {
    const { taskListPage, contactDetailsPage } = pages.frontEnd
    return taskListPage.completeTask('contactDetails', async () => {
      return contactDetailsPage.completePage(contact)
    })
  }

  async enterCardDetails (card = {}, pages) {
    const { cardPaymentPage } = pages.frontEnd
    return cardPaymentPage.completePage(card)
  }

  async charityPermitHolderDetails (data, pages) {
    const { charity, individual, limitedCompany, publicBody } = data
    const { charityDetailsPage, charityPermitHolderPage } = pages.frontEnd
    await charityPermitHolderPage.completePage(this.data.actualPermitHolder)
    await charityDetailsPage.completePage(charity)
    let permitHolder
    switch (this.data.actualPermitHolder.toLowerCase()) {
      case 'individual': {
        const { permitHolderDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage } = pages.frontEnd
        permitHolder = individual
        await permitHolderDetailsPage.completePage(individual, permitHolderDetailsPage.charityTitle)
        await permitHolderContactDetailsPage.completePage(individual)
        await this.addressDetails(individual, permitHolderAddressSelectPage, permitHolderAddressManualPage)
        break
      }
      case 'limited company': {
        const { companyNumberPage, companyCheckNamePage, directorsDateOfBirthPage, directorsEmailPage } = pages.frontEnd
        permitHolder = limitedCompany
        await companyNumberPage.completePage(limitedCompany.number, companyNumberPage.charityTitle)
        await companyCheckNamePage.completePage(limitedCompany)
        await directorsDateOfBirthPage.completePage(limitedCompany.directors)
        await directorsEmailPage.completePage(limitedCompany.directors[0].email)
        break
      }
      case 'public body': {
        const { publicBodyAddressManualPage, publicBodyAddressSelectPage, publicBodyOfficerPage } = pages.frontEnd
        permitHolder = publicBody
        await this.addressDetails(publicBody, publicBodyAddressSelectPage, publicBodyAddressManualPage, publicBodyAddressSelectPage.charityTitle)
        await publicBodyOfficerPage.completePage(publicBody)
        break
      }
      default:
        throw new Error(`Todo: Support for "${this.data.actualPermitHolder}"`)
    }
    if (permitHolder === publicBody) {
      const { publicBodyBankruptcyPage, publicBodyConvictionsPage } = pages.frontEnd
      await publicBodyConvictionsPage.completePage(permitHolder.convictions, publicBodyConvictionsPage.charityTitle)
      return publicBodyBankruptcyPage.completePage(permitHolder.bankruptcy, publicBodyBankruptcyPage.charityTitle)
    } else {
      const { bankruptcyPage, convictionsPage } = pages.frontEnd
      await convictionsPage.completePage(permitHolder.convictions)
      return bankruptcyPage.completePage(permitHolder.bankruptcy)
    }
  }

  async individualPermitHolderDetails (individual = {}, pages) {
    const { permitHolderDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, convictionsPage, bankruptcyPage } = pages.frontEnd
    await permitHolderDetailsPage.completePage(individual)
    await permitHolderContactDetailsPage.completePage(individual)
    await this.addressDetails(individual, permitHolderAddressSelectPage, permitHolderAddressManualPage)
    await convictionsPage.completePage(individual.convictions)
    return bankruptcyPage.completePage(individual.bankruptcy)
  }

  async limitedCompanyPermitHolderDetails (limitedCompany = {}, pages) {
    const { companyNumberPage, companyCheckNamePage, directorsDateOfBirthPage, directorsEmailPage, convictionsPage, bankruptcyPage } = pages.frontEnd
    await companyNumberPage.completePage(limitedCompany.number)
    await companyCheckNamePage.completePage(limitedCompany)
    await directorsDateOfBirthPage.completePage(limitedCompany.directors)
    await directorsEmailPage.completePage(limitedCompany.directors[0].email)
    await convictionsPage.completePage(limitedCompany.convictions)
    return bankruptcyPage.completePage(limitedCompany.bankruptcy)
  }

  async limitedLiabilityPartnershipPermitHolderDetails (limitedLiabilityPartnership = {}, pages) {
    const { companyNumberPage, companyCheckNamePage, directorsDateOfBirthPage, directorsEmailPage, convictionsPage, bankruptcyPage } = pages.frontEnd
    await companyNumberPage.completePage(limitedLiabilityPartnership.number, companyNumberPage.limitedLiabilityPartnershipTitle)
    await companyCheckNamePage.completePage(limitedLiabilityPartnership, companyCheckNamePage.limitedLiabilityPartnershipTitle)
    await directorsDateOfBirthPage.completePage(limitedLiabilityPartnership.directors, directorsDateOfBirthPage.limitedLiabilityPartnershipTitle)
    await directorsEmailPage.completePage(limitedLiabilityPartnership.directors[0].email, directorsEmailPage.limitedLiabilityPartnershipTitle)
    await convictionsPage.completePage(limitedLiabilityPartnership.convictions)
    return bankruptcyPage.completePage(limitedLiabilityPartnership.bankruptcy)
  }

  async publicBodyPermitHolderDetails (publicBody = {}, pages) {
    const { publicBodyAddressManualPage, publicBodyAddressSelectPage, publicBodyTradingNamePage, publicBodyOfficerPage, publicBodyBankruptcyPage, publicBodyConvictionsPage } = pages.frontEnd
    await publicBodyTradingNamePage.completePage(publicBody)
    await this.addressDetails(publicBody, publicBodyAddressSelectPage, publicBodyAddressManualPage)
    await publicBodyOfficerPage.completePage(publicBody)
    await publicBodyConvictionsPage.completePage(publicBody.convictions)
    await publicBodyBankruptcyPage.completePage(publicBody.bankruptcy)
  }

  async soleTraderPermitHolderDetails (soleTrader = {}, pages) {
    const { permitHolderDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, permitHolderTradingNamePage, convictionsPage, bankruptcyPage } = pages.frontEnd
    await permitHolderDetailsPage.completePage(soleTrader)
    await permitHolderTradingNamePage.completePage(soleTrader)
    await permitHolderContactDetailsPage.completePage(soleTrader)
    await this.addressDetails(soleTrader, permitHolderAddressSelectPage, permitHolderAddressManualPage)
    await convictionsPage.completePage(soleTrader.convictions)
    return bankruptcyPage.completePage(soleTrader.bankruptcy)
  }

  async partnershipPermitHolderDetails (partnership = {}, pages) {
    const { memberListPage, memberDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, memberTradingNamePage, convictionsPage, bankruptcyPage } = pages.frontEnd

    await memberTradingNamePage.completePage(partnership)

    const { partners } = partnership
    for (let index = 0; index < partners.length; index++) {
      const partner = partners[index]
      const contactDetailsTitle = index ? memberDetailsPage.title : memberDetailsPage.firstTitle
      await memberDetailsPage.completePage(partner, contactDetailsTitle)
      await permitHolderContactDetailsPage.completePage(partner, `What are the contact details for ${partner.firstName} ${partner.lastName}?`)
      await this.addressDetails(partner, permitHolderAddressSelectPage, permitHolderAddressManualPage, `What is the address for ${partner.firstName} ${partner.lastName}?`)
      await memberListPage.waitForPage()
      if (!index || index === partners.length - 1) {
        // Add second and last partner
        await memberListPage.click(memberListPage.continueButton)
      } else {
        // Add all other partners
        await memberListPage.click(memberListPage.addMemberLink)
      }
    }
    await convictionsPage.completePage(partnership.convictions)
    return bankruptcyPage.completePage(partnership.bankruptcy)
  }

  async groupPermitHolderDetails (group = {}, pages) {
    const { memberListPage, memberDetailsPage, permitHolderContactDetailsPage, permitHolderAddressSelectPage, permitHolderAddressManualPage, memberTradingNamePage, postholderConvictionsPage, bankruptcyPage } = pages.frontEnd

    await memberTradingNamePage.completePage(group, memberTradingNamePage.groupTitle)

    const { partners: postHolders } = group
    for (let index = 0; index < postHolders.length; index++) {
      const postHolder = postHolders[index]
      const contactDetailsTitle = index ? memberDetailsPage.groupTitle : memberDetailsPage.groupFirstTitle
      await memberDetailsPage.completePage(postHolder, contactDetailsTitle)
      await permitHolderContactDetailsPage.completePage(postHolder, `What are the contact details for ${postHolder.firstName} ${postHolder.lastName}?`)
      await this.addressDetails(postHolder, permitHolderAddressSelectPage, permitHolderAddressManualPage, `What is the address for ${postHolder.firstName} ${postHolder.lastName}?`)
      await memberListPage.waitForPage(memberListPage.groupTitle)
      if (!index || index === postHolders.length - 1) {
        // Add second and last partner
        await memberListPage.click(memberListPage.continueButton)
      } else {
        // Add all other partners
        await memberListPage.click(memberListPage.addMemberLink)
      }
    }
    await postholderConvictionsPage.completePage(group.convictions)
    return bankruptcyPage.completePage(group.bankruptcy)
  }

  async otherPermitHolderDetails (limitedCompany, partnership, pages) {
    const { permitGroupDecisionPage } = pages.frontEnd
    const permitHolder = this.data.actualPermitHolder.toLowerCase()
    await permitGroupDecisionPage.completePage(permitHolder)
    switch (permitHolder) {
      case 'limited company': {
        return this.limitedCompanyPermitHolderDetails(limitedCompany, pages)
      }
      case 'group': {
        return this.groupPermitHolderDetails(partnership, pages)
      }
      default:
        throw new Error(`Todo: Support for "${this.data.actualPermitHolder}"`)
    }
  }

  async permitHolderDetails (permitHolder, data, pages) {
    const { taskListPage, permitHolderSelectPage } = pages.frontEnd
    const { individual, limitedCompany, limitedLiabilityPartnership, partnership, publicBody, soleTrader } = data
    return taskListPage.completeTask('permitHolderDetails', async () => {
      await permitHolderSelectPage.completePage(permitHolder)
      switch (permitHolder.toLowerCase()) {
        case 'charity or trust': {
          return this.charityPermitHolderDetails(data, pages)
        }
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
        case 'other organisation': {
          return this.otherPermitHolderDetails(limitedCompany, partnership, pages)
        }
        case 'none': {
          return
        }
        default:
          throw new Error(`Todo: Support for "${permitHolder}"`)
      }
    })
  }

  async firePreventionPlan (files = [], pages) {
    const { taskListPage, firePreventionPlanPage } = pages.frontEnd
    return taskListPage.completeTask('firePreventionPlan', async () => {
      return firePreventionPlanPage.completePage(files)
    })
  }

  async mcpTemplate (pages) {
    const { taskListPage, mcpTemplatePage } = pages.frontEnd
    return taskListPage.completeTask('mcpTemplate', async () => {
      return mcpTemplatePage.completePage()
    })
  }

  async mcpDetails (files = [], pages) {
    const { taskListPage, mcpDetailsPage } = pages.frontEnd
    return taskListPage.completeTask('mcpDetails', async () => {
      return mcpDetailsPage.completePage(files)
    })
  }

  async mcpBusinessActivity (pages) {
    const { taskListPage, mcpBusinessActivityPage } = pages.frontEnd
    return taskListPage.completeTask('mcpBusinessActivity', async () => {
      return mcpBusinessActivityPage.completePage()
    })
  }

  async wasteRecoveryPlan (state = '', files = [], pages) {
    const { taskListPage, wasteRecoverySelectPage, wasteRecoveryPlanPage } = pages.frontEnd
    return taskListPage.completeTask('wasteRecoveryPlan', async () => {
      await wasteRecoverySelectPage.completePage(state)
      return wasteRecoveryPlanPage.completePage(files)
    })
  }

  async nonTechnicalSummary (files = [], pages) {
    const { taskListPage, nonTechnicalSummaryPage } = pages.frontEnd
    return taskListPage.completeTask('nonTechnicalSummary', async () => {
      await nonTechnicalSummaryPage.completePage(files)
    })
  }

  async screeningTool (files = [], pages) {
    const { taskListPage, screeningToolPage } = pages.frontEnd
    return taskListPage.completeTask('screeningTool', async () => {
      await screeningToolPage.completePage(files)
    })
  }

  async confirmMiningWaste (miningWaste = {}, pages) {
    const { taskListPage, confirmMiningWastePage, miningWasteWeightPage } = pages.frontEnd
    return taskListPage.completeTask('miningWaste', async () => {
      await confirmMiningWastePage.completePage(miningWaste)
      return miningWasteWeightPage.completePage(miningWaste)
    })
  }

  async siteNameAndLocation (site = {}, pages) {
    const { taskListPage, siteNamePage, gridReferencePage, siteAddressSelectPage, siteAddressManualPage } = pages.frontEnd
    return taskListPage.completeTask('siteNameAndLocation', async () => {
      await siteNamePage.completePage(site)
      await gridReferencePage.completePage(site)
      await this.addressDetails(site, siteAddressSelectPage, siteAddressManualPage)
    })
  }

  async sitePlan (files = [], pages) {
    const { taskListPage, sitePlanPage } = pages.frontEnd
    return taskListPage.completeTask('sitePlan', async () => {
      return sitePlanPage.completePage(files)
    })
  }

  async uploadEnergyEfficiencyReport (files = [], pages) {
    const { taskListPage, uploadEnergyEfficiencyReportPage } = pages.frontEnd
    return taskListPage.completeTask('uploadEnergyEfficiencyReport', async () => {
      return uploadEnergyEfficiencyReportPage.completePage(files)
    })
  }

  async uploadBestAvailableTechniquesAssessment (files = [], pages) {
    const { taskListPage, uploadBestAvailableTechniquesAssessmentPage } = pages.frontEnd
    return taskListPage.completeTask('uploadBestAvailableTechniquesAssessment', async () => {
      return uploadBestAvailableTechniquesAssessmentPage.completePage(files)
    })
  }

  async uploadAirDispersionModellingReport (files = [], pages) {
    const { taskListPage, uploadAirDispersionModellingReportPage } = pages.frontEnd
    return taskListPage.completeTask('uploadAirDispersionModellingReport', async () => {
      await uploadAirDispersionModellingReportPage.completePage(files)
    })
  }

  async proveTechnicalCompetence (competence = '', files = [], managersFiles = [], pages) {
    const { taskListPage, technicalCompetenceSelectPage, wamitabEvidencePage, gettingQualificationEvidencePage, deemedEvidencePage, esaeuEvidencePage, technicallyCompetentManagersPage } = pages.frontEnd
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
    const { taskListPage, invoiceAddressSelectPage, invoiceAddressManualPage, invoiceContactPage } = pages.frontEnd
    return taskListPage.completeTask('invoicingDetails', async () => {
      await this.addressDetails(invoice, invoiceAddressSelectPage, invoiceAddressManualPage)
      return invoiceContactPage.completePage(invoice)
    })
  }

  async confirmConfidentialityNeeds (details = '', pages) {
    const { taskListPage, confidentialityPage } = pages.frontEnd
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

  async makePayment (paymentDetails = {}, paymentType, pages) {
    const { applicationReceivedPage, bacsPaymentPage, bacsProofPage, paymentTypePage, cardPaymentPage, confirmPaymentPage } = pages.frontEnd
    await paymentTypePage.completePage(paymentType)
    switch (paymentType.toLowerCase()) {
      case 'card': {
        await cardPaymentPage.completePage(paymentDetails.validCard)
        await confirmPaymentPage.completePage()
        break
      }
      case 'bacs': {
        await bacsPaymentPage.completePage()
        await bacsProofPage.completePage(paymentDetails.validBacs)
        break
      }
      default:
        throw new Error(`Unknown payment type "${paymentType}"`)
    }
    return applicationReceivedPage.completePage(paymentType)
  }
}

module.exports = Tasks
