Feature: News Topic Filter

  #A test suite for topic filter functionality

  @SmokeTest
  Scenario: Verify 1 topic filter functionality
    Given I open "https://www.nsw.gov.au/news"
    When I select topics "Awards"
    And I click on Apply
    Then I verify "Awards" topic filter results
