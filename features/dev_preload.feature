@Dev
Feature: Preload an application for development

  Scenario Outline: As a developer I would like to pre-load an application for waste permit <Permit> when the permit holder is a <PermitHolder>
    Given As a <PermitHolder> I apply for waste permit <Permit> (<PermitCategory>)
    Examples:
      | PermitHolder                  | PermitCategory                                               | Permit       |
      | Limited company               | Car and vehicle dismantling                                  | SR2015 No 13 |
      | Sole trader                   | Metal recycling, scrap metal and WEEE - not cars or vehicles | SR2015 No 14 |
      | Limited liability partnership | Deposit for recovery                                         | SR2015 No 39 |
      | Individual                    | Composting, sewage or sludge treatment, biogas               | SR2010 No 14 |
      | Partnership                   | Electrical insulating oil storage                            | SR2012 No 15 |

#    Scenario: As a developer I would like to test from a recovered application
#      Given I recover my application with the recovery code: 82ab61371fae439fa45d3b4672fba714
#      And I enter my permit holder details for a Partnership

