@Regression @login
Feature: KasirAja Login with TDD

@TC-001 @all @positive @smoke
    Scenario: Login successfully with valid credentials
        Given I open KasirAja website
        When I login with valid credentials
        Then I should be on the dashboard page
        And I log out 

@TC-002 @TC-003 @all @negative 
    Scenario: Login with invalid credentials
        Given I open KasirAja website
        When I login with <email> and <password>
        Then I should see an error message

        Examples:
            | email                 | password          | 
            | invalid@gmail.com     | naspad33!         | 
            | baemon081@gmail.com   | invalid_password  | 
