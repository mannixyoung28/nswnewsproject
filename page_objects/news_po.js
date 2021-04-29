var BasePage = require('./base_po');

var News = function () {
    BasePage.call(this);

    this.filterTopicButton = element(by.cssContainingText("button.search-filter__toggle", "Select topics"));
}

News.prototype = Object.create(BasePage.prototype);

module.exports = News;