const baseConfig = require('./nightwatch.conf')
const path = require('path')

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
  const moduleName = nightwatchClient.currentTest.module,
      testName = nightwatchClient.currentTest.name;

  return path.join(process.cwd(), basePath, moduleName, testName, fileName)
}

module.exports =  {
  ...baseConfig,
  "src_folders" : ["vrt-tests"],
  custom_commands_path: [
    'node_modules/nightwatch-vrt/commands'
  ],
  custom_assertions_path: [
    'node_modules/nightwatch-vrt/assertions'
  ],
  "test_settings" : {
    "default": {
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
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions" : {
          "args": [
            "headless",
            "no-sandbox",
            "disable-gpu",
            "ignore-certificate-errors"
          ],
        }
      }
    }
  }
}
