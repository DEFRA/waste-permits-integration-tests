Feature: Bespoke end to end Smoke test

  # @Smoke_dev
#  @Smoke_test
  Scenario Outline: As a user I should be able to apply for a waste bespoke waste permit when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select I have received preapplication advice
    And I select Bespoke as the permit type
    And I select <FacilityType> as the type of facility
    And I should not be able to see text:Household waste amenity site taking non-hazardous waste only
    And I select the Biological treatment of waste - not composting activity I want the permit to cover

    # And I add Clinical waste transfer station as another activity I want the permit to cover
    # And I add Chemical treatment of waste as another activity I want the permit to cover
    # And I add Composting facility as another activity I want the permit to cover
    # And I add Fuel production from waste or treatment of waste water - Section 5.5 and 5.7 as another activity I want the permit to cover
    # And I add Hazardous waste storage - temporary or in underground storage - section 5.6 as another activity I want the permit to cover
    # And I add Hazardous waste transfer station as another activity I want the permit to cover
    # And I add Household waste amenity site taking hazardous waste as another activity I want the permit to cover
    # And I add Household waste amenity site taking non-hazardous waste only as another activity I want the permit to cover
    # And I add Household, commercial and industrial waste transfer station as another activity I want the permit to cover
    # And I add Management of inert extractive wastes at mines and quarries as another activity I want the permit to cover
    # And I add Material recycling facility as another activity I want the permit to cover
    # And I add Metal recycling site - mixed metals as another activity I want the permit to cover
    # And I add Mobile plant – treatment of waste - not land spreading as another activity I want the permit to cover
    # And I add Physical and chemical treatment of waste as another activity I want the permit to cover
    # And I add Physical treatment of hazardous waste as another activity I want the permit to cover
    # And I add Transfer station taking nonbiodegradable wastes as another activity I want the permit to cover
    # And I add Metal recycling site - vehicle dismantling as another activity I want the permit to cover
    # And I select all waste types

#    And I select <PermitCategory> as the permit category
#    And I select <Permit> as the permit number
#    And I check costs
#    And I confirm I meet the rules
#    And I confirm my vehicle storage area <SuitableVehicleStorage>
#    And I save my application
#    And I enter my contact details
#    And I enter my permit holder details for <PermitHolder>
#    And I <EnterSiteName> my site name and location
#    And I <EnterMiningWaste> confirmation of mining waste weight
#    And I <WasteRecoveryPlan> the waste recovery plan
#    And I <FirePreventionPlan> the fire plan
#    And I <SitePlan> the site plan
#    And I prove our technical competence as <TechnicalCompetence>
#    And I enter my invoicing details
#    And I confirm my confidentiality needs
#    And I submit my application
#    And I check my answers
#    And I choose to pay by <PaymentType>
    Examples:
      | PermitHolder                  | FacilityType                                                 | Permit       | SuitableVehicleStorage    | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence   | PaymentType |
     # | Public body                   | Installation                                                 | SR2014 No 2  | is not required           | enter            | skip              | skip               | upload   | enter         | skip                  | CARD        |
       | Limited company               | Waste operation                                              | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB               | BACS        |
      # | Sole trader                   | Metal recycling, scrap metal and WEEE - not cars or vehicles | SR2015 No 14 | is not required           | skip             | skip              | upload             | upload   | enter         | Getting Qualification | CARD        |
      # | Limited liability partnership | Deposit for recovery                                         | SR2015 No 39 | is not required           | skip             | changed           | skip               | upload   | enter         | Deemed                | BACS        |
      # | Individual                    | Composting, sewage or sludge treatment, biogas               | SR2012 No 7  | is not required           | skip             | skip              | skip               | upload   | enter         | skip                  | CARD        |
      # | Partnership                   | Electrical insulating oil storage                            | SR2012 No 15 | is not required           | skip             | skip              | skip               | upload   | enter         | ESA EU                | BACS        |
