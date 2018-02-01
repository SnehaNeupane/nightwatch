module.exports = {
  before: function (browser) {
    browser
      .url('https://appnxt.cloudfactory.com')
      .pause(500);
    browser.expect.element('body').to.be.present;
  },
  after: function (browser) {
    browser
      .end();
  }
};
