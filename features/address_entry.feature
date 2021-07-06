Feature: Address entry Smoke test

  @Smoke_test
  @Smoke_preprod
  Scenario: As a user I should be able to select addresses when applying for a standard rules waste permit
    Given the application has been launched
    And I start a new application
     And I select I have received preapplication advice
    And I will select each address
    And I select Standard rules as the permit type
    And I select Composting, sewage or sludge treatment, biogas as the permit category
    And I select SR2012 No 7 as the permit number
    And I enter my site name and location
    And I enter my permit holder details for Partnership
    And I enter my invoicing details

  