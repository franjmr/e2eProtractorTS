exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    capabilities: {
      browserName: 'chrome'
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
    }
  };