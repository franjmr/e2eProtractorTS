exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    maxSessions: 1,
    multiCapabilities: [
        //{ browserName: 'firefox', firefoxOptions: { args: ['--headless'] }, 'moz:firefoxOptions': { args: [ '--headless' ] } },
        //{ browserName: 'chrome', chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=1366,768"] } },
        //{ browserName: 'chrome' },
        { browserName: 'firefox' },
    ],
    suites: {
        props: '__dist__/**/*personal*props*spec.js',
        ui: '__dist__/**/*ui*spec.js'
    },
    specs: [ '__dist__/**/*personal*props*spec.js' ],
    directConnect: true,
    noGlobals: true,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 600000
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
                displayErrorMessages: true,
                displayDuration: true,
                displayFailed: true
            },
            summary: {
                displayDuration: true
            }
        });
    
        jasmine.getEnv().addReporter(junitReporter);
        jasmine.getEnv().addReporter(specReporter);
    } 
  };