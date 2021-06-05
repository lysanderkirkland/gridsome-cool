const path = require('path')

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
    const moduleName = nightwatchClient.currentTest.module,
        testName = nightwatchClient.currentTest.name;

    return path.join(process.cwd(), basePath, moduleName, testName, fileName)
}

nightwatch_config = {
    src_folders : [ "browserstack" ],

    webdriver : {
        "start_process" : false,
        "host" : "hub-cloud.browserstack.com",
        "port" : 80
    },
    custom_commands_path: [
        'node_modules/nightwatch-vrt/commands'
    ],
    custom_assertions_path: [
        'node_modules/nightwatch-vrt/assertions'
    ],
    test_settings: {
        "globals": {
            "visual_regression_settings": {
                "generate_screenshot_path": generateScreenshotFilePath,
                "latest_screenshots_path": "vrt/latest",
                "latest_suffix": "",
                "baseline_screenshots_path": "vrt/baseline",
                "baseline_suffix": "",
                "diff_screenshots_path": "vrt/diff",
                "diff_suffix": "",
                "threshold": 0,
                "prompt": false,
                "always_save_diff_screenshot": false
            }
        },
        default: {
            desiredCapabilities: {
                'build': 'browserstack-build-1',
                'browserstack.user': 'lysander_knzC3o',
                'browserstack.key': 'SHLb5Gpv3b7SVQZgMGMN',
                'browserstack.debug': true,
                'browser': 'chrome',
                'browser_version': '91.0',
                'os': 'Windows',
                'os_version': '10'
            }
        }
    }
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.webdriver.host;
    config['selenium_port'] = nightwatch_config.webdriver.port;
}

module.exports = nightwatch_config;