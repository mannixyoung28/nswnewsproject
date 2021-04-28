const { browser } = require("protractor");
const EC = protractor.ExpectedConditions;

var BasePage = function () {
    this.loaded = async function () {
        if ((typeof this.pageLoaded) === 'function')
        {
            return await browser.wait(await this.pageLoaded(), 30000, 'timeout: waiting for page to load. The url is: ' + this.url);
        }
        else {
            return true;
        }        
    };

    this.goto = async function (url) {
        await browser.get(url, 30000);
        console.log('Current URL: ' + url);
        return await this.loaded();
    };        
};

module.exports = BasePage;