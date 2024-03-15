@Regression @pelanggan
Feature: Sub Menu Pelanggan KasirAja

@TC-004 @all @positive @smoke
    Scenario: Add a new customer with valid data

        Given I navigate to the Pelanggan page
        When I click on the add button
        And I fill in the customer details with valid data
        Then I should see a success message
        And I should be redirected to the Customer URL

@TC-005 @all @negative @smoke
    Scenario: Add a new customer with empty name
         
        Given I navigate to the Pelanggan page
        When I click on the add button
        And I fill in the customer details except for the name field
        Then I should see an error name message

@TC-006 @all @negative @smoke
    Scenario: Add a new customer with invalid phone format
         
        Given I navigate to the Pelanggan page
        When I click on the add button
        And I enter an invalid phone format in the phone field
        Then I should see an error phone message


    
