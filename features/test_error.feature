Feature: Error test trial

    @Smoke
    Scenario: As a user I should get error for invalid entries
        Given the application has been launched
        And I start a new application
        And I select none as the permit holder
        And I should see an error "Select who will be the permit holder"