module.exports = {
  tags: ['login'],
  'Cfclient App Login': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    // client.expect.element('body').to.be.present;
    client
      .pause(2000)
      .assert.elementPresent('.faded-font')
      .assert.containsText(".faded-font", "You currently don't have any WorkStreams")
      .click('.user-info').pause(2000)
      .setValue('#user_email', 'sneha@nxt.com')
      .setValue('#user_password', 'kathmandu09')
      .click('.sign_in').pause(30000);
    // .assert.hidden('.faded-font')
    // client.end();
  }
}
