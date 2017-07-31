module.exports = {
  tags: ['logout'],
  'Logout': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    // client.expect.element('body').to.be.present;
    client
      // .pause(2000)
      .click('.nav-profile')
      .click('.sign_out').pause(22000);
    // client.end()
  }
}
