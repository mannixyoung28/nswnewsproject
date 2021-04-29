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


When("I click on Filter", {
  timeout: 10 * 5000
}, async function () {
  var news_page = new News();
  
  //await browser.sleep(5000);
  //console.log("sleep");

  // Expand the filter
  var EC = protractor.ExpectedConditions;
  await browser.wait(EC.elementToBeClickable(news_page.filterTopicButton), 30000);
  await news_page.scrollIntoView(news_page.filterTopicButton);
  await news_page.filterTopicButton.click();
  console.log("filter clicked");
});


When("I select topics {string}", {
  timeout: 10 * 5000
}, async function (topicName) {
  var news_page = new News();

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


Then("I verified {string} topic filter results", {
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


When("I close the browser", {
  timeout: 10 * 5000
}, async function () {
  await browser.close();
});

When("I click on Reset", {
  timeout: 6 * 5000
}, async function () {
  var EC = protractor.ExpectedConditions;
  // Click on Apply button
  var resetButton = element(by.css("input[value=\"Reset\"]"));
  await browser.wait(EC.visibilityOf(resetButton), 15000);
  await resetButton.click();
  console.log("Reset clicked");
});

Then("I verified that filter is cleared", {
  timeout: 6 * 5000
}, async function () {
  timeout: 6 * 5000
  var EC = protractor.ExpectedConditions;
  element.all(by.css("input[type=\"checkbox\"]")).each(function(child, index) {
      child.getText().then(async function (value) {
      console.log("value is " + value);
      await expect(value).to.equal("");
    });
  });
});
