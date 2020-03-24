exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    capabilities: { browserName: 'chrome', chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=1366,768"] } },
    suites: {
        props: '__dist__/**/*props*spec.js',
        ui: '__dist__/**/*ui*spec.js'
    },
    specs: [ '__dist__/**/*spec.js' ],
    directConnect: true,
    noGlobals: true,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    onPrepare: function() {

        let jasmineReporters = require('jasmine-reporters');
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    
        const junitReporter = new jasmineReporters.JUnitXmlReporter({
            savePath: 'junit',
            consolidateAll: false
        });
    
        const specReporter = new SpecReporter({
            spec: {
              displayStacktrace: true,
              displayDuration: true
            }
        });
    
        jasmine.getEnv().addReporter(junitReporter);
        jasmine.getEnv().addReporter(specReporter);
    } 
  };