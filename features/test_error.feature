Feature: Error test trial

    @Smoke
    Scenario: As a user I should get error for invalid entries
        Given the application has been launched
        And I start a new application
        And I select Standard rules as the permit type
        And I select none as the permit holder
        And I should see an error "Select who will be the permit holder"


    @Smoke
    Scenario Outline: As a user I should get error for invalid contact details
        Given the application has been launched
        And I start a new application
        And I select Standard rules as the permit type
        And I select Limited company as the permit holder
        And I select Car and vehicle dismantling as the permit category
        And I select SR2015 No 13 as the permit number
        And I enter a contact with <Field> set to "<Value>"
        And I should see an error <Message>
        Examples:
            | Field     | Value     | Message          |
            | firstName |           | "Enter a first name" |
            | firstName | 457474577 | "First name can only include letters, hyphens and apostrophes - delete any other characters" |
            | firstName | 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 | "First name can only include letters, hyphens and apostrophes - delete any other characters//Enter a shorter first name with no more than 50 characters" |
