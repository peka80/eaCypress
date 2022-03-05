Feature: EATestFeature
    Test EA Feature 

    Scenario: Test the login feature
        Given I visit EA site
        Given I click login link
        #Given I login as user with "admin" and "password"
        Given I login as following
            | userName | Password |
            | admin    | password |

        And Logoff from site
