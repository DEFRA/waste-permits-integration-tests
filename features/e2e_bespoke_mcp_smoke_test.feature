Feature: Bespoke MCP end to end Smoke test

  @Smoke_dev
  @Smoke_test @Ben
  Scenario Outline: As a user I should be able to apply for a bespoke MCP permit when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select Bespoke as the permit type
    And I select <PermitHolder> as the permit holder
    And I select Medium combustion plant or specified generator as the type of facility
    And I select <MCPType> as the type of MCP
    And I select <ExistingEPRPermit> as already having an EPR permit
    And I select <Under500Hours> as operating under 500 hours
    And I select <AirDispersionReport> to provide an air dispersion modelling report
    And I confirm my activities and assessments
#    And I confirm I meet the rules
#    And I confirm my vehicle storage area <SuitableVehicleStorage>
#    And I save my application
#    And I enter my contact details
#    And I enter my permit holder details
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
      | PermitHolder                  | MCPType                | ExistingEPRPermit | Under500Hours | AirDispersionReport | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence   | PaymentType |
      | Public body                   | Stationary MCP         | no                | yes           | skip                | skip              | skip               | upload   | enter         | skip                  | BACS        |
      | Limited company               | Stationary SG          | no                | skip           | yes                  | skip              | upload             | upload   | enter         | WAMITAB               | BACS        |
      | Sole trader                   | Stationary MCP also SG | no                | yes           | skip                | skip              | upload             | upload   | enter         | Getting Qualification | CARD        |
      | Limited liability partnership | Mobile SG              | skip              | skip          | skip                | changed           | skip               | upload   | enter         | Deemed                | BACS        |
      | Individual                    | Mobile SG also MCP     | skip              | skip          | yes                 | skip              | skip               | upload   | enter         | skip                  | CARD        |
