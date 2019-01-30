Feature: Address entry Smoke test

  @Ben
  Scenario Outline: As a user I should be able to select addresses when applying for a standard rules waste permit
    Given the application has been launched
    And I recover my application with the recovery code: <slug>
    And I enter my <permit holder> permit holder details
    And I submit my application
    And I check my answers
    And I choose to pay by BACS
#    And the CRM application has been launched
#    And I login as a "P&SC" user
#    Then I open the application

    Examples:
      | permit holder             | slug                             |
      | Other organisation: Group | c373c1d2ee5341ac91403bdd848d7f3a |