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

var SeleniumPage = require('../page_objects/news_po');

Given("I have visited the NSW News official web page on {string}", {
  timeout: 6 * 5000
}, async function (url) {
  var Selenium_main_page = new SeleniumPage();
  await Selenium_main_page.goto(url);
});

When("There is a tile on the page as {string}", {
  timeout: 6 * 5000
}, async function (titleMatch) {
    var titleText = await browser.getTitle();
    await expect(titleText).to.equal(titleMatch);    
});

Then("I should be able to click Search in the sidebar", {
  timeout: 6 * 5000
}, async function () {
    var searchTextElement = element(by.css('input[name="search"]'));
    await searchTextElement.click();    
});
