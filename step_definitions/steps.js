'use strict'
// Declaration
const EC = protractor.ExpectedConditions;
const { browser } = require("protractor");
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const {
  Before,
  Given,
  When,
  Then,
  After,
  Status
} = require(path.join(
  __dirname,
  '..',
  'node_modules',
  'protractor-cucumber-framework',
  'lib',
  'cucumberLoader'
)).load();

const News = require("../page_objects/news_po");

Given("I open {string}", {
  timeout: 10 * 5000
}, async function (url) {
  var news_page = new News();
  await news_page.goto(url);
});

When("I select topics {string}", {
  timeout: 10 * 5000
}, async function (topicName) {
  var news_page = new News();

  // Expand the filter
  var EC = protractor.ExpectedConditions;
  await browser.wait(EC.visibilityOf(news_page.filterTopicButton), 30000);
  await news_page.filterTopicButton.click();
  console.log("filter clicked");

  // Select a filter topic
  var topicFilter = element(by.cssContainingText("label", topicName));
  await browser.wait(EC.visibilityOf(topicFilter), 20000);
  await news_page.scrollIntoView(topicFilter);
  await topicFilter.click();
  console.log("topicFilter clicked");
});

When("I click on Apply", {
  timeout: 6 * 5000
}, async function () {
  var EC = protractor.ExpectedConditions;
  // Click on Apply button
  var applyButton = element(by.css("#edit-submit-news"));
  await browser.wait(EC.visibilityOf(applyButton), 15000);
  await applyButton.click();
  console.log("apply clicked");
});


Then("I verify {string} topic filter results", {
  timeout: 6 * 5000
}, async function (topicName) {
  var EC = protractor.ExpectedConditions;
  element.all(by.css('div.nsw-card--news')).each(function(child, index) {
    // Will print 0 First, 1 Second, 2 Third.
    child.element(by.css('p.nsw-card__tag')).getText().then(async function (text) {
      await expect(topicName).to.equal(text);
    });
  });
});
