exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    framework: 'custom',    
    frameworkPath: require.resolve('protractor-cucumber-framework'),    
    capabilities: {
      browserName: 'chrome',
      acceptSslCerts: 'true',
    },
    specs: [
      '../features/*.feature'
    ],
    SELENIUM_PROMISE_MANAGER: false,
    
    onPrepare: function () {
      browser.waitForAngularEnabled(false);
    },    
    cucumberOpts: {
      require: ['../step_definitions/*.js'],
      tags: ['@TEST'],
      format: 'json:reports/TestResults.json',
      profile: false,
      'no-source': true
    },
  
    ignoreUncaughtExceptions: true
  };