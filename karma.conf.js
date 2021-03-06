// Karma configuration
// Generated on Thu Oct 11 2018 09:25:28 GMT+0200 (Central European Summer Time)

// process.env.CHROME_BIN = require('puppeteer').executablePath(); // Puppeteer

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: ['src/**/*.js', 'spec/**/*.spec.js'],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage'],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress', 'jasmine-seed', 'coverage', 'junit'],
    reporters: ['mocha', 'junit', 'jasmine-seed', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // browsers: ['HeadlessChromeWOPuppeteer'], // Kein Puppeteer
    // browsers: ['ChromeHeadless'], // Puppeteer

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // istanbulReporter: {
    //   dir: 'coverage',
    //   reporters: [{ type: 'html', subdir: 'report-html' }],
    // },

    junitReporter: {
      outputDir: 'reports',
    },

    customLaunchers: {
      HeadlessChromeWOPuppeteer: {
        base: 'Chrome',
        flags: ['--headless', '--remote-debugging-port=9222'],
      },
    },

    client: {
      jasmine: {
        // seed: 82897,
      },
    },
  });
};
