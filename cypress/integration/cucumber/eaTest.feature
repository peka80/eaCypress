Feature: EATestFeature
    Test EA Feature 

    Scenario: Test the login feature
        Given I visit EA site
        Given I click login link
        Given I login as user with "admin" and "password"
        And Logoff from site