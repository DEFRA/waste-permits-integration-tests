Feature: Tests to check Standard rules which are applicable online and SR's which are applicable for download form

  @Smoke_dev
  @Smoke_test
  @Smoke_preprod
  Scenario: As a user, I should be able to download the forms for the offline permit category and I should be able to fill the forms online for the online permit
    Given the application has been launched
    And I start a new application
    And I select Standard rules as the permit type
    And I select Flood risk activities as the permit category
    Then I am on Apply for flood risk activities permits apply offline page with https://www.gov.uk/guidance/flood-risk-activities-environmental-permits#standard-rules-permits link
    #go back
    Then I go back to the What do you want the permit for? page
    And I select Water discharges as the permit category
    Then I am on Apply for water discharges permits apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-standard-permit-water-discharge link
    #go back
    Then I go back to the What do you want the permit for? page
     And I select Radioactive substances for non-nuclear sites as the permit category
    Then I am on Apply for radioactive substances for non-nuclear sites permits apply offline page with https://www.gov.uk/government/collections/radioactive-substances-regulation-for-non-nuclear-sites link
    #go back
    Then I go back to the What do you want the permit for? page
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2012 No 4 as the permit number
    Then I am on Apply for composting in closed systems - installation - SR2012 No 4 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2012 No 8 as the permit number
    Then I am on Apply for composting in open systems - installation - SR2012 No 8 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2009 No 3 as the permit number
    Then I am on Apply for low impact part a installation for the production of biodiesel - SR2009 No 3 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Mining, oil and gas as the permit category
    And I select SR2009 No 8 as the permit number
    Then I am on Apply for management of inert wastes and unpolluted soil at mines and quarries - SR2009 No 8 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Mining, oil and gas as the permit category
    And I select SR2015 No 2 as the permit number
    Then I am on Apply for storage and handling of crude oil from onshore oil and gas - installation - SR2015 No 2 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Mining, oil and gas as the permit category
    And I select SR2015 No 1 as the permit number
    Then I am on Apply for the management of extractive waste, not including a waste facility, generated from onshore oil and gas prospecting excluding hydraulic fracturing - SR2015 No 1 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2009 No 2 as the permit number
    Then I am on Apply for low impact part a installation for spent ion exchange resins - SR2009 No 2 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2012 No 13 as the permit number
    Then I am on Apply for treatment of incinerator bottom ash (iba) - installation - SR2012 No 13 apply offline page with https://www.gov.uk/government/collections/environmental-permit-application-forms-for-a-standard-permit-installations-mining-waste-or-waste-operation link
    #online apply pages
    #go back
    Then I go back to the Select a permit page
    Then I go back to the What do you want the permit for? page
    And I select Car and vehicle dismantling as the permit category
    And I select SR2015 No 13 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no13-75kte-vehicle-storage-depollution-and-dismantling-authorised-treatment-facility
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Metal recycling, scrap metal and WEEE - not cars or vehicles as the permit category
    And I select SR2015 No 14 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no14-75kte-metal-recycling-site
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Deposit for recovery as the permit category
    And I select SR2015 No 39 as the permit number
    And I check 3,872 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no39-use-of-waste-in-a-deposit-for-recovery-operation
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2010 No 14 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-no14-500t-composting-biodegradable-waste
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Electrical insulating oil storage as the permit category
    And I select SR2012 No 15 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2012-no15-storage-of-electrical-insulating-oils
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Anaerobic digestion including storing digestate as the permit category
    And I select SR2012 No 12 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2012-no12-anaerobic-digestion-facility-including-use-of-the-resultant-biogas-waste-recovery-operation
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Anaerobic digestion including storing digestate as the permit category
    And I select SR2012 No 10 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2012-no10-on-farm-anaerobic-digestion-facility-using-farm-wastes-only-including-use-of-the-resultant-biogas
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Car and vehicle dismantling as the permit category
    And I select SR2015 No 18 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no18-metal-recycling-vehicle-storage-depollution-and-dismantling-facility 
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Car and vehicle dismantling as the permit category
    And I select SR2015 No 17 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no17-vehicle-storage-depollution-and-dismantling-authorised-treatment-facility
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2011 No 1 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2011-no1-500t-composting-biodegradable-waste-in-open-and-closed-systems
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2012 No 3 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2012-no3-composting-in-closed-systems
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2012 No 7 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2012-no7-composting-in-open-systems
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2015 No 12 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no12-75kte-non-hazardous-mechanical-biological-aerobic-treatment-facility
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2008 No 19 250kte as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2008-no19-250kte-non-hazardous-sludge-biological-chemical-and-physical-treatment-site
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2008 No 19 75kte as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2008-no19-75kte-non-hazardous-sludge-biological-chemical-and-physical-treatment-site
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Deposit for recovery as the permit category
    And I select SR2015 No 39 as the permit number
    And I check 3,872 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no39-use-of-waste-in-a-deposit-for-recovery-operation
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Electrical insulating oil storage as the permit category
    And I select SR2012 No 15 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2012-no15-storage-of-electrical-insulating-oils
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Metal recycling, scrap metal and WEEE - not cars or vehicles as the permit category
    And I select SR2015 No 14 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no14-75kte-metal-recycling-site
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Metal recycling, scrap metal and WEEE - not cars or vehicles as the permit category
    And I select SR2015 No 16 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no16-metal-recycling-site
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Metal recycling, scrap metal and WEEE - not cars or vehicles as the permit category
    And I select SR2008 No 22 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2008-no22-75kte-storage-of-furnace-ready-scrap-metal-for-recovery 
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Metal recycling, scrap metal and WEEE - not cars or vehicles as the permit category
    And I select SR2009 No 7 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2009-no7-storage-of-furnace-ready-scrap-metal-for-recovery
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Metal recycling, scrap metal and WEEE - not cars or vehicles as the permit category
    And I select SR2015 No 15 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no15-75kte-weee-authorised-treatment-facility-excluding-ozone-depleting-substances
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Mining, oil and gas as the permit category
    And I select SR2014 No 2 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2014-no-2-the-management-of-extractive-waste
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Mobile plant for land-spreading or treatment as the permit category
    And I select SR2010 No 4 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-no4-mobile-plant-for-land-spreading
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Mobile plant for land-spreading or treatment as the permit category
    And I select SR2010 No 6 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-no6-mobile-plant-for-land-spreading-of-sewage-sludge
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Mobile plant for land-spreading or treatment as the permit category
    And I select SR2010 No 5 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-no5-mobile-plant-for-reclamation-restoration-or-improvement-of-land
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Mobile plant for land-spreading or treatment as the permit category
    And I select SR2008 No 27 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/standard-rules-sr2008-number-27
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Mobile plant for land-spreading or treatment as the permit category
    And I select SR2010 No 11 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-number-11
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2015 No 21 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no21-75kte-materials-recycling-facility
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2010 No 18 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-no18-storage-and-treatment-of-dredgings-for-recovery 
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2010 No 17 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-no17-storage-of-digestate-from-anaerobic-digestion-plants
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2013 No 1 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2013-no-1-treatment-of-100-ty-of-clinical-and-healthcare-waste
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2010 No 12 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2010-number-12
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2015 No 23 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no23-treatment-of-waste-wood-for-recovery
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2015 No 24 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no24-use-of-waste-to-manufacture-timber-or-construction-products
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2008 No 9 as the permit number
    And I check 2,641 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2008-no9-asbestos-waste-transfer-station
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 4 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no4-75kte-household-commercial-and-industrial-waste-transfer-station
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 9 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no9-household-commercial-and-industrial-waste-transfer-station-with-asbestos-storage-no-building
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 6 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no6-75kte-household-commercial-and-industrial-waste-transfer-station-with-treatment
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 7 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no7-household-commercial-and-industrial-waste-transfer-station-with-treatment-no-building
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 10 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no10-75kte-household-commercial-and-industrial-waste-transfer-station-with-treatment-and-asbestos-storage
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 11 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no11-household-commercial-and-industrial-waste-transfer-station-with-treatment-and-asbestos-storage-no-building
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 20 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no20-75kte-non-hazardous-and-hazardous-household-waste-amenity-site
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 19 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no19-75kte-non-hazardous-household-waste-amenity-site
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Metal recycling, scrap metal and WEEE - not cars or vehicles as the permit category
    And I select SR2015 No 3 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no3-metal-recycling-and-weee-authorised-treatment-facility-excluding-ozone-depleting-substances
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Storage or treatment of waste - recycling, dredgings, clinical, soil or wood treatment as the permit category
    And I select SR2015 No 22 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no22-materials-recycling-facility-no-building
#go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 5 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no5-household-commercial-and-industrial-waste-transfer-station-no-building
    #go back
    And I select a different permit from the task list page
    And I select Standard rules as the permit type
    And I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 8 as the permit number
    And I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no8-75kte-household-commercial-and-industrial-waste-transfer-station-with-asbestos-storage