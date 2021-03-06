// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('.agreement')
      .assert.containsText('.el-dialog__title', '众易融用户在线申请协议')
      // .assert.elementCount('img', 1)
      .setValue('input[type=userName]', 'aisi')
      .setValue('input[type=telephone]', '18312341234')
      .setValue('input[type=captcha]', '6481')
      .click('button[name=apply]')
      .end()
  }
}
