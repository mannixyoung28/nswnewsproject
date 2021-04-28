var BasePage = require('./base_po');

var News = function () {
    BasePage.call(this);

}

News.prototype = Object.create(BasePage.prototype);

module.exports = News;