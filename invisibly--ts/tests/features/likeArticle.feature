Feature: Testing Like an Article
    Scenario: Liking an Article
        Given I am on the Invisibly landing page
        Then I click on an article
        When I click on the like icon
        Then I have liked an article
