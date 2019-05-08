Feature: WE-2088 Route directly to MCP permit types from guidance

  @Smoke_dev_MCPSR
  Scenario Outline: If the <PermitHolder> applicant  comes directly from the MCP guidance they should be able to skip the category selection - <PermitCategory>
    Given the application has been launched
    And I start a new application
    And I select <Permit> as the permit number
    And I select <EprPermit> as already having an EPR permit
    And I check costs
    And I confirm I meet the rules
    And I confirm my vehicle storage area <SuitableVehicleStorage>
    And I <GeneratorList> the download of the generator list template
    And I save my application
    And I enter my permit holder details for <PermitHolder>
    And I enter my contact details
    And I <GeneratorList> the upload of the generator list
    And I <BusinessActivity> the business or activity type
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
    Then the application is created successfully in CRM
    Examples:
      | PermitHolder                      | PermitCategory                                                         | Permit      | SuitableVehicleStorage | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence | PaymentType | GeneratorList | BusinessActivity | EprPermit |
      | Limited company                   | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | include          | no        |
      | Sole trader                       | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | include          | no        |
      | Public body                       | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | include          | no        |
      | Individual                        | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | include          | no        |
      | Limited liability partnership     | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | include          | no        |
      | Charity or trust: Public body     | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | include          | no        |
      | Charity or trust: Limited company | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | include          | no        |
      | Charity or trust: Individual      | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7 | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | include          | no        |



@Smoke_dev_MCPGenSR
  Scenario Outline: If the <PermitHolder> applicant  comes directly from the MCP guidance they should be able to skip the category selection - <PermitCategory>
    Given the application has been launched
    And I start a new application
    And I select <Permit> as the permit number
    And I select <EprPermit> as already having an EPR permit
    And I check costs
    And I confirm I meet the rules
    And I confirm my vehicle storage area <SuitableVehicleStorage>
    And I <GeneratorList> the download of the generator list template
    And I save my application
    And I enter my permit holder details for <PermitHolder>
    And I enter my contact details
    And I <GeneratorList> the upload of the generator list
    And I <BusinessActivity> the business or activity type
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
    Then the application is created successfully in CRM
    Examples:
      | PermitHolder                      | PermitCategory                                                         | Permit      | SuitableVehicleStorage | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence | PaymentType | GeneratorList | BusinessActivity | EprPermit |
      | Limited company                   | Generators - Specified Generator, Tranche B                            | SR2018 No 8   | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | skip          | no        |
      | Sole trader                       | Generators - Specified Generator, Tranche B                            | SR2018 No 8  | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | skip          | no        |
      | Public body                       | Generators - Specified Generator, Tranche B                            | SR2018 No 8   | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | skip          | no        |
      | Individual                        | Generators - Specified Generator, Tranche B                            | SR2018 No 8   | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | skip          | no        |
      | Limited liability partnership     | Generators - Specified Generator, Tranche B                            | SR2018 No 8   | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | skip          | no        |
      | Charity or trust: Public body     | Generators - Specified Generator, Tranche B                            | SR2018 No 8   | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | skip          | no        |
      | Charity or trust: Limited company | Generators - Specified Generator, Tranche B                            | SR2018 No 8   | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | BACS        | include       | skip          | no        |
      | Charity or trust: Individual      | Generators - Specified Generator, Tranche B                            | SR2018 No 8   | is not required        | skip             | skip              | skip               | skip     | enter         | skip                | CARD        | include       | skip          | no        |

  @Smoke_dev_MCPBespoke_direct
  Scenario Outline: If the <PermitHolder> applicant  comes directly from the MCP guidance they should be able to skip the category selection - <MCPType>
    Given the application has been launched
    And I start a new application
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
