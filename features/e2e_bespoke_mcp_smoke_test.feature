Feature: Bespoke MCP end to end Smoke test

  @Smoke_dev
  @Smoke_test
  Scenario Outline: As a user I should be able to apply for a bespoke MCP permit when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select Bespoke as the permit type
    And I select Medium combustion plant or specified generator as the type of facility
    And I select <MCPType> as the type of MCP
    And I select <ExistingEPRPermit> as already having an EPR permit
    And I select <Under500Hours> as operating under 500 hours
    And I select <AirDispersionReport> to provide an air dispersion modelling report
    And I select <NewOrRefurbished> when plant is new or refurbished
    And I select <ThermalInput20to50> rated thermal input between 20MW and 50MW
    And I select <ThermalInputOver20> rated thermal input over 20MW
    And I select <HabitAssessment> as requiring a habitat assessment
    And I confirm my activities and assessments
    And I save my application
    And I enter my permit holder details for <PermitHolder>
    And I enter my contact details
    And I enter my site name and location
    And I include the download of the generator list template
    And I include the upload of the generator list
    And I include the business or activity type
    And I upload the non-technical summary
    And I upload the air dispersion modelling report
    And I upload the completed screening tool
    And I upload the energy efficiency report
    And I upload the best available techniques assessment
    And I enter my invoicing details
    And I confirm my confidentiality needs
#    And I submit my application
#    And I check my answers
    Examples:
      | PermitHolder                  | MCPType                | ExistingEPRPermit | Under500Hours | AirDispersionReport | NewOrRefurbished | ThermalInput20to50 | ThermalInputOver20 | HabitAssessment |
      | Public body                   | Stationary MCP         | no                | yes           | skip                | skip             | skip               | skip               | skip            |
      | Limited company               | Stationary SG          | no                | skip          | yes                 | skip             | yes                | skip               | no              |
      | Individual                    | Stationary SG          | no                | skip          | yes                 | skip             | no                 | skip               | yes             |
      | Sole trader                   | Stationary MCP also SG | no                | yes           | skip                | skip             | skip               | skip               | skip            |
      | Limited liability partnership | Mobile SG              | skip              | skip          | skip                | skip             | skip               | skip               | skip            |
      | Individual                    | Mobile SG also MCP     | skip              | skip          | skip                | no               | yes                | yes                | skip            |
      | Public body                   | Mobile SG also MCP     | skip              | skip          | skip                | yes              | no                 | no                 | skip            |
