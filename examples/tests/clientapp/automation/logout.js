module.exports = {
  tags: ['logout'],
  'Logout': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    // client.expect.element('body').to.be.present;
    client
      // .pause(2000)
      .assert.elementPresent('.nav-profile')
      .click('.nav-profile').pause(500)
      .assert.elementPresent('.sign_out')
      .click('.sign_out').pause(20000);
    // client.end()
  }
}
