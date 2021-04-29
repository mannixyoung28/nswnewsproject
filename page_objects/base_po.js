const { browser } = require("protractor");
const EC = protractor.ExpectedConditions;

var BasePage = function () {
    this.loaded = async function () {
        if ((typeof this.pageLoaded) === 'function')
        {
            return await browser.wait(await this.pageLoaded(), 30000, 'timeout: waiting for page to load. The url is: ' + this.url);  //30 sec limit
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
    
    this.scrollIntoView = async function (element) {
        await browser.executeScript('arguments[0].scrollIntoView()', element);
    }

};

module.exports = BasePage;