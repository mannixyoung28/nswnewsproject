Feature: News Topic Filter

  #A test suite for topic filter functionality

  @SmokeTest
  Scenario: Verify 1 topic filter functionality
    Given I open "https://www.nsw.gov.au/news"
    When I click on Filter
    When I select topics "Awards"
    And I click on Apply
    Then I verified "Awards" topic filter results

 @SmokeTest
  Scenario: Verify topic filter reset functionality
    Given I open "https://www.nsw.gov.au/news"
    When I click on Filter
    When I select topics "Awards"
    And I select topics "Business and Economy"
    And I select topics "Education"
    And I click on Apply
    And I click on Reset
    And I click on Filter
    Then I verified that filter is cleared