module.exports = {
    'my first test case' : (browser) => {
        browser
            .url('https://nervous-hodgkin-f22395.netlify.app/')
            .assert.screenshotIdenticalToBaseline('#app',  'home page')
            .end()
    }
}
