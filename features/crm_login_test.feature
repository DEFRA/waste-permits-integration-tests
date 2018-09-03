Feature: End to end Smoke test

  @CRM
  Scenario: As a user I should be able to open an application in CRM
    Given the CRM application has been launched
    And I login as a "P&SC" user