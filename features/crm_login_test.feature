Feature: CRM end to end Smoke test

  @CRM1
  Scenario: As a user I should be able to open an application in CRM
    Given the CRM application has been launched
    And I take screenshots
    And I login as a "P&SC" user
    And I take screenshots
    And I skip the navigation tour
    And I set the application as "EPR/WE5735MC/A001"
    Then I open the application

  @CRM
  Scenario: As a user I should be able to open an application in CRM
    Given the CRM application has been launched
    And I take screenshots
    And I login as a "P&SC" user
    And I take screenshots
    And I set the application as "EPR/WE7119QB/A001"
    And I take screenshots
    Then I open the application

  @CRM1
  Scenario: As a user I should be able to open an application in CRM
    Given the CRM application has been launched
    And I login as a "P&SC" user
    And I set the application as "EPR/WE5735MC/A001"
    Then I open the application

  @CRM1
  Scenario: As a user I should be able to open an application in CRM
    Given the CRM application has been launched
    And I login as a "P&SC" user
    And I set the application as "EPR/WE5735MC/A001"
    Then I open the application

  @CRM
  Scenario Outline: As a user I should be able to apply for waste permit <Permit> when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I take screenshots
    And I start a new application
    And I take screenshots
    And I select Standard rules as the permit type
    And I select <PermitHolder> as the permit holder
    And I select <PermitCategory> as the permit category
    And I select <Permit> as the permit number
    And I check costs
    And I confirm I meet the rules
    And I confirm my vehicle storage area <SuitableVehicleStorage>
    And I save my application
    And I enter my contact details
    And I enter my permit holder details
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
    And the CRM application has been launched
    And I login as a "P&SC" user
    And I skip the navigation tour
    Then I open the application
    Examples:
      | PermitHolder                  | PermitCategory                                               | Permit       | SuitableVehicleStorage    | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence   | PaymentType |
      | Limited company               | Mobile plant for land-spreading or treatment                 | SR2010 No 4  | is not required           | skip             | skip              | skip               | skip     | skip          | WAMITAB               | BACS        |
