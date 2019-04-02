Feature: Address entry Smoke test

  @Smoke_dev
  @Smoke_test
  Scenario: As a user I should be able to select addresses when applying for a standard rules waste permit
    Given the application has been launched
    And I start a new application
    And I will select each address
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2012 No 7 as the permit number
    And I check costs
    And I confirm I meet the rules
    And I save my application
    And I enter my permit holder details for Partnership
    And I enter my contact details
    And I enter my site name and location
    And I upload the site plan
    And I prove our technical competence as WAMITAB
    And I enter my invoicing details
    And I confirm my confidentiality needs
    And I submit my application
    And I check my answers
    And I choose to pay by BACS
#    And the CRM application has been launched
#    And I login as a "P&SC" user
#    Then I open the application

  @Smoke_preprod
  @Smoke_prod
  Scenario: As a user I should be able to select addresses when applying for a standard rules waste permit
    Given the application has been launched
    And I start a new application
    And I will select each address
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2012 No 7 as the permit number
    And I check costs
    And I confirm I meet the rules
    And I save my application
    And I enter my permit holder details for Partnership
    And I enter my contact details
    And I enter my site name and location
    And I upload the site plan
    And I prove our technical competence as WAMITAB
    And I enter my invoicing details
    And I confirm my confidentiality needs
    And I submit my application
    And I check my answers
  #  And I choose to pay by BACS