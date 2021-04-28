var cucumberJunit = require('cucumber-junit');
var file = require('./reports/TestResults.json');
var fs = require('fs');
var os = require('os');
require('dotenv').config()

var reporter = require('cucumber-html-reporter');

// preparing metadata
const OS_NAME = process.env.OS_NAME || os.type()
const BROWSER_NAME = process.env.BROWSER_NAME || 'Local'
const BROWSER_VERSION = process.env.BROWSER_VERSION || 'Local'
const START_TIME = process.env.START_TIME
const END_TIME = process.env.END_TIME
const AUTOMATION_BUILD_NUMBER = process.env.AUTOMATION_BUILD_NUMBER
var EXECUTED_MODE = ''
BROWSER_VERSION == 'Local' ? EXECUTED_MODE = 'Local' : EXECUTED_MODE = 'Remote'

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/TestResults.json',
    output: 'reports/TestResults.html',
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "Automation Build Numbder": AUTOMATION_BUILD_NUMBER,
        "Browser Name": BROWSER_NAME,
        "Browser Version": BROWSER_VERSION,
        "Platform": OS_NAME,
        "Start Time": START_TIME,
        "End Time": END_TIME,
        "Executed": EXECUTED_MODE
    }
}; 
reporter.generate(options);

function createXMLResult() {
  
    // console.log(file);
    vfile = JSON.stringify(file);
    var xml = cucumberJunit(vfile, {strict: true});
    fs.writeFile('reports/JUnitTestResults.xml', new Buffer(xml), (err) => {
        if (err) throw err;
        console.log('The JUnit test results file has been saved!');
      });
}

createXMLResult();