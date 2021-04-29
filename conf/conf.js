exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',  //selenium server
    getPageTimeout: 60000,                            //60 secs
    framework: 'custom',    
    frameworkPath: require.resolve('protractor-cucumber-framework'),    
    capabilities: {
      browserName: 'chrome',
      acceptSslCerts: 'true',
    },
    specs: [
      '../features/*.feature'
    ],
    SELENIUM_PROMISE_MANAGER: true,
    
    onPrepare: function () {
      browser.waitForAngularEnabled(false);
    },    
    cucumberOpts: {
      require: ['../step_definitions/*.js'],
      tags: ['@SmokeTest'],
      format: 'json:reports/TestResults.json',
      profile: false,
      'no-source': true
    },
  
    ignoreUncaughtExceptions: true
  };