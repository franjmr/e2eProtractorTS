exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    capabilities: { 
        browserName: 'chrome', chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=1366,768"] } 
        //browserName: 'chrome'
    },
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
    onPrepare: async function() {
        let jasmineReporters = require('jasmine-reporters');
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        let globals = require('protractor');
        let browser = globals.browser;

        // BROWSER
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);

        // JASMINE-JUNIT REPORTER
        const junitReporter = new jasmineReporters.JUnitXmlReporter({
            savePath: 'junit',
            consolidateAll: false
        });
    
        // JASMINE-SPEC REPORTER
        const specReporter = new SpecReporter({
            spec: {
              displayStacktrace: "pretty",
              displayDuration: true
            }
        });
    
        jasmine.getEnv().addReporter(junitReporter);
        jasmine.getEnv().addReporter(specReporter);
    } 
  };