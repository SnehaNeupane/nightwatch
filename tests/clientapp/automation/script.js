module.exports = {
  tags: ['login'],
  'Cfclientapp Login': function (client) {
    client
      .url('https://appnxt.cloudfactory.com/')
      .pause(500);
    client.expect.element('body').to.be.present;
    client
      .pause(2000)
      // .assert.elementPresent('.faded-font')
      // .assert.containsText(".faded-font", "You currently don't have any WorkStreams")
      .click('.user-info').pause(2000)
      .setValue('#user_email', 'sneha@nxt.com')
      .setValue('#user_password', 'kathmandu09')
      .click('.sign_in').pause(30000)
      .click('.workstream-tiles a:nth-of-type(2)').pause(15000) //WorkStream Tile
      // .assert.hidden('.faded-font')
      // .setValue('.message-form-text', 'Hi There!').pause(700)
      .click('.fa-times').pause(500) // Hide Tour
      .click('.fa-users').pause(3000) //Teams
      .click('.client-block div:nth-of-type(2)') //Click client block
      .click('.btn.btn-primary') //Make client Lead
      .click('.modal-footer .btn-primary') //Yes
      .pause(3000)
    client.end();
  }
}
