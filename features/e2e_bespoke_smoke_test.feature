Feature: Bespoke end to end Smoke test

  @Smoke_dev
#  @Smoke_test
  Scenario Outline: As a user I should be able to apply for a bespoke waste permit when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select Bespoke as the permit type
    And I select Waste operation as the type of facility
    And I select the following activities I want the permit to cover: Biological treatment of waste - not composting
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
      | Public body                   | Installation                                                 | SR2014 No 2  | is not required           | enter            | skip              | skip               | upload   | enter         | skip                  | BACS        |
      | Limited company               | Waste operation                                              | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB               | BACS        |
      | Sole trader                   | Metal recycling, scrap metal and WEEE - not cars or vehicles | SR2015 No 14 | is not required           | skip             | skip              | upload             | upload   | enter         | Getting Qualification | CARD        |
      | Limited liability partnership | Deposit for recovery                                         | SR2015 No 39 | is not required           | skip             | changed           | skip               | upload   | enter         | Deemed                | BACS        |
      | Individual                    | Composting, sewage or sludge treatment, biogas               | SR2012 No 7  | is not required           | skip             | skip              | skip               | upload   | enter         | skip                  | CARD        |
      | Partnership                   | Electrical insulating oil storage                            | SR2012 No 15 | is not required           | skip             | skip              | skip               | upload   | enter         | ESA EU                | BACS        |
