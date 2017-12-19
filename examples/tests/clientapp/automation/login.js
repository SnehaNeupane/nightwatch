module.exports = {
  tags: ['login'],
  'Cfclient App Login': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    // client.expect.element('body').to.be.present;
    client
      .pause(4000)
      .assert.elementPresent('.user-info')
      .click('.user-info').pause(3000)
      .assert.elementPresent('#user_email')
      .assert.elementPresent('#user_password')
      .assert.elementPresent('.sign_in')
      .setValue('#user_email', 'sneha@nxt.com')
      .setValue('#user_password', 'kathmandu09')
      .click('.sign_in').pause(13000);
  }
}
