module.exports = {
  tags: ['logout'],
  'WorkStream logout': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    client
      .click('.overlay-text').pause(200)
      .click('ws-signout').pause(22000);
    // client.end();
  }
}
