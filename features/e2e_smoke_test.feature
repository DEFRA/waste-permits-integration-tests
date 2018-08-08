Feature: End to end Smoke test

  @Smoke
  Scenario Outline: As a user I should be able to apply for waste permit <Permit> when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select <PermitHolder> as the permit holder
    And I select <PermitCategory> as the permit category
    And I select <Permit> as the permit number
    And I check costs
    And I confirm I meet the rules
    And I confirm my vehicle storage area <SuitableVehicleStorage>
    And I save my application
    And I enter my contact details
    And I enter my permit holder details for a <PermitHolder>
    And I <EnterSiteName> my site name and location
    And I <WasteRecoveryPlan> the waste recovery plan
    And I <FirePreventionPlan> the fire plan
    And I <SitePlan> the site plan
    And I prove our technical competence as <TechnicalCompetence>
    And I enter my invoicing details
    And I confirm my confidentiality needs
    And I submit my application
    Examples:
      | PermitHolder                  | PermitCategory                                               | Permit       | SuitableVehicleStorage    | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence   |
      | Limited company               | Car and vehicle dismantling                                  | SR2015 No 13 | has a sewer under consent | skip              | upload             | upload   | enter         | WAMITAB               |
      | Sole trader                   | Metal recycling, scrap metal and WEEE - not cars or vehicles | SR2015 No 14 | is not required           | skip              | upload             | upload   | enter         | Getting Qualification |
      | Limited liability partnership | Deposit for recovery                                         | SR2015 No 39 | is not required           | changed           | skip               | upload   | enter         | Deemed                |
      | Individual                    | Composting, sewage or sludge treatment, biogas               | SR2010 No 14 | is not required           | skip              | skip               | upload   | enter         | ESA EU                |