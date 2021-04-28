Feature: A feature to validate certain actions on visiting the Selenium Dev website
    @SmokeTest
    Scenario: On visiting the homepage of NSW News
        Given I have visited the NSW News official web page on "https://www.nsw.gov.au/news"
        When There is a tile on the page as "News | NSW Government"
        When I expand the Select topics filter