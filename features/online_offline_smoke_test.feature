@Smoke_dev
Feature: Tests to check Standard rules which are applicable online and SR's which are applicable for download form

  Background: Selecting Standard rule permit
    Given the application has been launched
    And I start a new application
    And I select I have received preapplication advice
    And I select Standard rules as the permit type

  Scenario: As a user, I should be able to download the forms for the offline permit category and I should be able to fill the forms online for the online permit
    When I select Flood risk activities as the permit category
    Then I am on Apply for flood risk activities permits apply offline page with https://www.gov.uk/guidance/flood-risk-activities-environmental-permits#standard-rules-permits link

  Scenario: As a user, I should be able to fill the forms online for the online permit
    When I select Waste transfer station or amenity site with or without treatment as the permit category
    And I select SR2015 No 8 as the permit number
    Then I check 3,926 on the Cost and processing time page
    And I confirm that I meet the rules https://www.gov.uk/government/publications/sr2015-no8-75kte-household-commercial-and-industrial-waste-transfer-station-with-asbestos-storage