Feature: End to end Smoke test

  @CRM1
  Scenario: As a user I should be able to open an application in CRM
    Given the CRM application has been launched
    And I login as a "P&SC" user
    #And I open the application "WE3186MC/A001"


  @CRM
  Scenario Outline: As a user I should be able to apply for waste permit <Permit> when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select Standard rules as the permit type
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
    And I <EnterMiningWaste> confirmation of mining waste weight
    And I <WasteRecoveryPlan> the waste recovery plan
    And I <FirePreventionPlan> the fire plan
    And I <SitePlan> the site plan
    And I prove our technical competence as <TechnicalCompetence>
    And I enter my invoicing details
    And I confirm my confidentiality needs
    And I submit my application
    And I check my answers
    And I choose to pay by <PaymentType>
    When the CRM application has been launched
    And I login as a "P&SC" user
    # And I open the application "WE3186MC/A001"
    Examples:
      | PermitHolder                  | PermitCategory                                               | Permit       | SuitableVehicleStorage    | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence   | PaymentType |
      | Public body                   | Mining, oil and gas                                          | SR2014 No 2  | is not required           | enter            | skip              | skip               | upload   | enter         | skip                  | BACS        |   