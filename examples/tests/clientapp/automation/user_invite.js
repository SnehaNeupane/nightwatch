module.exports = {
  tags: ['User Invite'],
  'Invite User': function (client) {
    client
      .pause(2000)
      .assert.elementPresent('.fa.fa-user-plus')
      .click('.fa.fa-user-plus').pause(1000)
      .assert.elementPresent('.invite-select input')
      // .click('.invite-select input').pause(1000)
      .setValue('.invite-select input', 'lanthu@lanthu.com').pause(4000)
      .keys(client.Keys.TAB);
  }
}
