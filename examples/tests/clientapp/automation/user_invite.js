module.exports = {
  tags: ['User Invite'],
  'Invite User': function (client) {
    client
      .pause(2000)
      .click('.fa.fa-user-plus').pause(1000)
      .assert.elementPresent('.Select-placeholder')
      .click('.Select-placeholder')
      .setValue('.Select-placeholder', 'lanthu@lanthu.com').pause(3000)
      .keys(client.Keys.TAB)
      .keys(client.Keys.ESC)
      .click('.emailCount').pause(500);
  }
}
