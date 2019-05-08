Feature: Bespoke MCP end to end Smoke test

  @Smoke_dev
  @Smoke_test
  Scenario Outline: As a user I should be able to apply for a bespoke MCP (<MCPType>) permit when the permit holder is a <PermitHolder>
    Given the application has been launched at <Path>
    And I start a new application
    And I select <PermitType> as the permit type
    And I select <Facility> as the type of facility
    And I select <MCPType> as the type of MCP
    And I select <ExistingEPRPermit> as already having an EPR permit
    And I select <Under500Hours> as operating under 500 hours
    And I select <AirDispersionReport> to provide an air dispersion modelling report
    And I select <EnergyEfficiencyReport> to provide an energy efficiency report
    And I select <ThermalInput20to50> to rated thermal input between 20MW and 50MW and <EnergyType> for where the generator gets it's energy from
    And I select <BurningWasteBiomass> to burning waste biomass and <ExceedsOneMWThermal> to exceeds 1MW thermal
    And I select <HabitAssessment> as requiring a habitat assessment
    And I confirm my activities and assessments
    And I save my application
    And I enter my permit holder details for <PermitHolder>
    And I enter my contact details
    And I <SiteNameAndLocation> my site name and location
    And I include the download of the generator list template
    And I include the upload of the generator list
    And I <BusinessTypeUpload> the business or activity type
    And I upload the non-technical summary
    And I <AirDispersionReportUpload> the air dispersion modelling report
    And I <ScreeningToolUpload> the completed screening tool
    And I <EnergyEfficiencyReportUpload> the energy efficiency report
    And I <BestAvailableTechniquesAssessmentUpload> the best available techniques assessment
    And I <AQMA> the air quality management area details
    And I choose <NaceCode> for the main business activity that the plant or generator is used for
    And I enter my invoicing details
    And I confirm my confidentiality needs
    And I submit my application
    And I check my answers
#    And I choose to pay by BACS
#    Then the application is created successfully in CRM
    Examples:
      | PermitHolder                        | PermitType | Facility                                       | Path                                   | MCPType                | ExistingEPRPermit | Under500Hours | AirDispersionReport | EnergyEfficiencyReport | ThermalInput20to50 | EnergyType | BurningWasteBiomass | ExceedsOneMWThermal | HabitAssessment | AirDispersionReportUpload | ScreeningToolUpload | EnergyEfficiencyReportUpload | BestAvailableTechniquesAssessmentUpload | BusinessTypeUpload | SiteNameAndLocation | AQMA    | NaceCode |
      | Public body                         | skip       | skip                                           | /start/start-or-open-saved/mcp-bespoke | Stationary MCP         | no                | yes           | skip                | skip                   | skip               | skip       | skip                | skip                | skip            | skip                      | skip                | skip                         | skip                                    | upload             | enter               | include | skip     |
      | Other organisation: Limited company | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Stationary MCP         | no                | no            | no                  | yes                    | skip               | skip       | yes                 | no                  | no              | skip                      | upload              | upload                       | skip                                    | skip               | enter               | include | 01.13    |
      | Charity or trust: Limited company   | skip       | skip                                           | /start/start-or-open-saved/mcp-bespoke | Stationary MCP         | no                | no            | no                  | yes                    | skip               | skip       | no                  | skip                | no              | skip                      | upload              | upload                       | skip                                    | skip               | enter               | include | 22.22    |
      | Other organisation: Group           | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Stationary MCP         | no                | no            | yes                 | yes                    | skip               | skip       | yes                 | yes                 | no              | upload                    | skip                | upload                       | upload                                  | skip               | enter               | include | 37.00    |
      | Charity or trust: Public body       | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Stationary MCP         | no                | no            | no                  | yes                    | skip               | skip       | yes                 | no                  | yes             | skip                      | upload              | upload                       | skip                                    | skip               | enter               | include | 01.62    |
      | Limited company                     | skip       | skip                                           | /start/start-or-open-saved/mcp-bespoke | Stationary SG          | no                | skip          | yes                 | skip                   | yes                | boiler     | skip                | skip                | no              | upload                    | skip                | skip                         | upload                                  | skip               | enter               | include | skip     |
      | Individual                          | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Stationary SG          | no                | skip          | yes                 | skip                   | no                 | skip       | skip                | skip                | yes             | upload                    | skip                | skip                         | skip                                    | skip               | enter               | include | skip     |
      | Sole trader                         | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Stationary MCP also SG | no                | yes           | skip                | skip                   | skip               | skip       | skip                | skip                | skip            | skip                      | skip                | skip                         | skip                                    | upload             | enter               | include | skip     |
      | Individual                          | skip       | skip                                           | /start/start-or-open-saved/mcp-bespoke | Stationary MCP also SG | no                | no            | yes                 | no                     | no                 | skip       | yes                 | yes                 | no              | upload                    | skip                | skip                         | upload                                  | upload             | enter               | include | skip     |
      | Limited company                     | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Stationary MCP also SG | no                | no            | no                  | no                     | yes                | boiler     | skip                | skip                | yes             | skip                      | upload              | skip                         | upload                                  | upload             | enter               | include | skip     |
      | Public body                         | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Stationary MCP also SG | no                | no            | yes                 | no                     | yes                | spark      | yes                 | yes                 | no              | upload                    | skip                | skip                         | upload                                  | upload             | enter               | include | skip     |
      | Limited liability partnership       | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Mobile SG              | skip              | skip          | skip                | skip                   | skip               | skip       | skip                | skip                | skip            | skip                      | skip                | skip                         | skip                                    | skip               | skip                | skip    | skip     |
      | Individual                          | skip       | skip                                           | /start/start-or-open-saved/mcp-bespoke | Mobile MCP             | skip              | skip          | skip                | no                     | skip               | skip       | skip                | skip                | skip            | skip                      | skip                | skip                         | skip                                    | upload             | skip                | skip    | skip     |
      | Public body                         | Bespoke    | Medium combustion plant or specified generator | /start/start-or-open-saved             | Mobile MCP             | skip              | skip          | skip                | yes                    | skip               | skip       | skip                | skip                | skip            | skip                      | skip                | upload                       | skip                                    | upload             | skip                | skip    | skip     |

