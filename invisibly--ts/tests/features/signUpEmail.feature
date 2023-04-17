Feature: Testing Email Signup
  Scenario: Creating an Invisibly Account With Email
    Given I open the Invisibly application
    Then I click on the signin icon
    When I enter my email address
    Then I click on the continue with email button
    When I enter my password
# Then I click on the continue with email button
# Then I am signed up
