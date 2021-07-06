Feature: Standard rules end to end Smoke test

  Scenario Outline: As a user I should be able to apply for a standard rules waste permit <Permit> when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select I have received preapplication advice
    And I select Standard rules as the permit type
    And I select <PermitCategory> as the permit category
    And I select <Permit> as the permit number
    And I select <EprPermit> as already having an EPR permit
    And I check costs
    And I enter a valid pre application number
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

    @Smoke_dev
    Examples:
      | PermitHolder                        | PermitCategory                                                         | Permit       | SuitableVehicleStorage    | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence   | PaymentType | GeneratorList | BusinessActivity | EprPermit |
      | Charity or trust: Public body       | Mining, oil and gas                                                    | SR2014 No 2  | is not required           | enter            | skip              | skip               | upload   | enter         | skip                  | BACS        | skip          | skip             | skip      |
      | Charity or trust: Individual        | Composting, sewage or sludge treatment, biogas                         | SR2012 No 7  | is not required           | skip             | skip              | skip               | upload   | enter         | Deemed                | CARD        | skip          | skip             | skip      |
      | Public body                         | Mining, oil and gas                                                    | SR2014 No 2  | is not required           | enter            | skip              | skip               | upload   | enter         | skip                  | BACS        | skip          | skip             | skip      |
      | Limited company                     | Medium combustion plant - stationary and in operation after 20/12/2018 | SR2018 No 7  | is not required           | skip             | skip              | skip               | skip     | enter         | skip                  | BACS        | include       | include          | no        |
      | Sole trader                         | Generators - Specified Generator, Tranche B                            | SR2018 No 8  | is not required           | skip             | skip              | skip               | skip     | skip          | skip                  | CARD        | include       | skip             | no        |
      | Sole trader                         | Metal recycling, scrap metal and WEEE - not cars or vehicles           | SR2015 No 14 | is not required           | skip             | skip              | upload             | upload   | enter         | Getting Qualification | CARD        | skip          | skip             | skip      |
      | Limited liability partnership       | Deposit for recovery                                                   | SR2015 No 39 | is not required           | skip             | changed           | skip               | upload   | enter         | Deemed                | BACS        | skip          | skip             | skip      |
      | Individual                          | Composting, sewage or sludge treatment, biogas                         | SR2012 No 7  | is not required           | skip             | skip              | skip               | upload   | enter         | Deemed                | CARD        | skip          | skip             | skip      |
      | Partnership                         | Electrical insulating oil storage                                      | SR2012 No 15 | is not required           | skip             | skip              | skip               | upload   | enter         | ESA EU                | BACS        | skip          | skip             | skip      |
      | Other organisation: Group           | Metal recycling, scrap metal and WEEE - not cars or vehicles           | SR2015 No 14 | is not required           | skip             | skip              | upload             | upload   | enter         | Getting Qualification | CARD        | skip          | skip             | skip      |
      | Other organisation: Limited company | Electrical insulating oil storage                                      | SR2012 No 15 | is not required           | skip             | skip              | skip               | upload   | enter         | ESA EU                | BACS        | skip          | skip             | skip      |
      | Charity or trust: Limited company   | Car and vehicle dismantling                                            | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB               | BACS        | skip          | skip             | skip      |
