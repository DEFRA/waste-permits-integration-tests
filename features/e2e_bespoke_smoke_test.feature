Feature: Bespoke end to end Smoke test

  @Smoke_dev
  #  @Smoke_test
  Scenario Outline: As a user I should be able to apply for a waste bespoke waste permit when the permit holder is a <PermitHolder>
    Given the application has been launched
    And I start a new application
    And I select I have received preapplication advice
    And I select Bespoke as the permit type
    And I select <FacilityType> as the type of facility
    And I should be able to see text:Household waste amenity site taking non-hazardous waste only
    And I should not be able to see text:Storage and handling of crude oil or stabilised crude petroleum - tank storage capacity under 500 tonnes - section 1.2A(1)(e)
    And I should not be able to see text:Mining waste operation without flare
    And I should not be able to see text:Mining waste operation with flare
    And I should not be able to see text:Mining waste operation with mining waste facility and flare
    And I should not be able to see text:Mining waste operation and mining waste facility with fracturing and flare
    And I should not be able to see text:Mining waste facility - Category A
    And I should not be able to see text:Management of inert extractive wastes at mines and quarries
    And I should not be able to see text:Mobile plant – treatment of waste - not land spreading
    And I should not be able to see text:Inert mining waste operation
    And I should not be able to see text:Non-inert mining waste operation with a non-inert mining waste facility
    And I should not be able to see text:Non-inert mining waste operation without a mining waste facility
    And I should not be able to see text:Mobile plant for land-spreading
    And I should not be able to see text:Fuel production from waste or treatment of waste water - Section 5.5 and 5.7
    And I should not be able to see text:Hazardous waste storage - temporary or in underground storage - section 5.6
    And I should not be able to see text:Landfill for nonhazardous waste with a separate cell for stable nonreactive hazardous waste, asbestos or gypsum - section 5.2
    And I should not be able to see text:Landfill for nonhazardous waste and lagoons or dredging sites subject to the Landfill Directive - section 5.2
    And I should not be able to see text:Landfill for hazardous waste - section 5.2
    And I should not be able to see text:Leachate treatment plant with a capacity of 50 or more tonnes a day - section 5.4
    And I should not be able to see text:Leachate treatment plant with a capacity of less than 50 tonnes a day
    And I should not be able to see text:Landfill gas plant
    And I should not be able to see text:Landfill for inert waste
    And I should not be able to see text:Lagoons and dredging sites - excluded from the Landfill Directive
    And I should not be able to see text:Deposit of waste for recovery
    And I select the Biological treatment of waste - not composting activity I want the permit to cover
    And I add Clinical waste transfer station as another activity I want the permit to cover
    And I add Chemical treatment of waste as another activity I want the permit to cover
    And I add Composting facility as another activity I want the permit to cover
    And I add Hazardous waste transfer station as another activity I want the permit to cover
    And I add Household waste amenity site taking hazardous waste as another activity I want the permit to cover
    And I add Household waste amenity site taking non-hazardous waste only as another activity I want the permit to cover
    And I add Household, commercial and industrial waste transfer station as another activity I want the permit to cover
    And I add Material recycling facility as another activity I want the permit to cover
    And I add Metal recycling site - mixed metals as another activity I want the permit to cover
    And I add Physical and chemical treatment of waste as another activity I want the permit to cover
    And I add Physical treatment of hazardous waste as another activity I want the permit to cover
    And I add Physical treatment of nonhazardous waste as another activity I want the permit to cover
    And I add Transfer station taking nonbiodegradable wastes as another activity I want the permit to cover
    And I add Metal recycling site - vehicle dismantling as another activity I want the permit to cover
    And I select combustible waste type
    And I select Dust and emissions management plan assessment
    And I select Habitats assessment assessment
    And I select Noise and vibration management plan assessment
    And I select Pest management plan assessment
    And I select Waste recovery plan assessment and continue
    And I confirm my activities and assessments
    And I save my application
    And I enter a valid pre application number
    And I enter my contact details
    And I enter my permit holder details for <PermitHolder>
    And I confirm my confidentiality needs
    And I enter my invoicing details
    And I complete tell us who we need to consult
    And I <EnterSiteName> my site name and location
    And I <SitePlan> the site plan
    And I upload the site condition report
    #And I provide non technical summary
    And I <FirePreventionPlan> the fire plan
    And I <WasteRecoveryPlan> the waste recovery plan
    And I prove our technical competence as <TechnicalCompetence>
    And I list the types of waste you want to accept
    And I provide the waste storage and throughput capacity for your activities
    And I provide your waste treatment capacity
    And I provide list the disposal and recovery codes for your activities
    And I provide all the files for the bespoke application
    And I provide management summary details
    And I submit my application
    # And I check my answers
    # And I choose to pay by <PaymentType>
    # And I provide a management system summary
    # # Upload the waste recovery plan
    # # Upload the environmental risk assessment
    # # Complete the climate change risk screening
    # # Tell us about emissions and monitoring
    # # List the technical standards you use
    # # Upload the dust and emissions management plan
    # # Upload noise and vibration emissions documents
    # # Upload the odour management plan
    # # Upload a pest management plan




    Examples:
      | PermitHolder    | FacilityType    | Permit       | SuitableVehicleStorage    | EnterMiningWaste | WasteRecoveryPlan | FirePreventionPlan | SitePlan | EnterSiteName | TechnicalCompetence | PaymentType |
      #  | Public body                   | Waste operation | SR2014 No 2  | is not required           | enter            | skip              | skip               | upload   | enter         | skip                  | CARD        |
      | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |
      # | Limited company | Waste operation | SR2015 No 13 | has a sewer under consent | skip             | skip              | upload             | upload   | enter         | WAMITAB             | CARD        |

# | Sole trader                   | Waste operation | SR2015 No 14 | is not required           | skip             | skip              | upload             | upload   | enter         | Getting Qualification | CARD        |
# | Limited liability partnership | Waste operation | SR2015 No 39 | is not required           | skip             | changed           | skip               | upload   | enter         | Deemed                | BACS        |
# | Individual                    | Waste operation | SR2012 No 7  | is not required           | skip             | skip              | skip               | upload   | enter         | skip                  | CARD        |
# | Partnership                   | Waste operation | SR2012 No 15 | is not required           | skip             | skip              | skip               | upload   | enter         | ESA EU                | BACS        |
