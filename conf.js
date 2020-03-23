exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine',
    capabilities: {
      browserName: 'chrome'
    },
    specs: [ '__dist__/**/*spec.js' ],
    directConnect: true,
    noGlobals: true,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    }
  };