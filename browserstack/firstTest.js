module.exports = {
    'my first very simple test case' : (browser) => {
        browser
            .url('https://nervous-hodgkin-f22395.netlify.app/')
            .waitForElementVisible('#app')
            .assert
            .containsText('h1', 'Hello, world!' )
    }
}
