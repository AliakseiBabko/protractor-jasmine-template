'use strict';
const path = require("path");
const yargs = require("yargs").argv;
//@ts-ignore
const HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,  
    baseUrl: 'https://www.exadel.com/',    
    /*
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
        maxInstances: 2        
    },
    */
    multiCapabilities: [{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
    }, {
        browserName: 'firefox'
    }],
    
    specs: [
        `jasmine_e2e/${yargs.spec || "*/*.js"}`
    ],
    // restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
         }).getJasmine2Reporter());
        console.log("Hello from onPrepare()!");
    },
    beforeLaunch: function () {
        console.log("Hello from beforeLaunch()!");
    },
    onComplete: function () {
        console.log("Hello from onComplete()!");
    },
    SELENIUM_PROMISE_MANAGER: false,

    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};