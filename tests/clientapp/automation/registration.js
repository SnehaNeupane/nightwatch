module.exports = {
  tags: ['Registration'],
  'Create an account': function (client) {
    client
      .url('https://appnxt.cloudfactory.com')
      .pause(500);
    client.expect.element('body').to.be.present;
    client
      .pause(2000)
      .click('.user-info').pause(2000)
      .click('.signup').pause(9000)
      .setValue('#user_email', 'automation@cloudfactory.com')
      .click('.sign_up').pause(40000);
    client.end()
  }
}
