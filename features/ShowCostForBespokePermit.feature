Feature: WE2081 - Show cost for bespoke permit

  # @Smoke_dev
#  @Smoke_test
  Scenario Outline: As a user I should be able to apply for a bespoke waste permit when the facility is <FacilityType>
    Given the application has been launched
    And I start a new application
    And I select Bespoke as the permit type
    And I select <FacilityType> as the type of facility
    And I select the following activities I want the permit to cover: Biological treatment of waste - not composting
    And I select all plans to access
    And I confirm activities and assessments


    Examples:
      | FacilityType                                                 | Permit       | SuitableVehicleStorage    | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence   | PaymentType |
#      | Installation                                                 | SR2014 No 2  | is not required           | enter            | skip              | skip               | upload   | enter         | skip                  | BACS        |
      | Waste operation                                              | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB               | BACS        |
#      | Metal recycling, scrap metal and WEEE - not cars or vehicles | SR2015 No 14 | is not required           | skip             | skip              | upload             | upload   | enter         | Getting Qualification | CARD        |
#      | Deposit for recovery                                         | SR2015 No 39 | is not required           | skip             | changed           | skip               | upload   | enter         | Deemed                | BACS        |
#      | Composting, sewage or sludge treatment, biogas               | SR2012 No 7  | is not required           | skip             | skip              | skip               | upload   | enter         | skip                  | CARD        |
#      | Electrical insulating oil storage                            | SR2012 No 15 | is not required           | skip             | skip              | skip               | upload   | enter         | ESA EU                | BACS        |


