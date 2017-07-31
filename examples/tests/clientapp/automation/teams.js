module.exports = {
  tags: ['assign-scope'],
  'Assign scope to a user': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    // client.expect.element('body').to.be.present;
    client
      .pause(2000)
      .click('.workstream-tiles a:nth-of-type(2)').pause(15000) //WorkStream Tile
      // .assert.hidden('.faded-font')
      .click('.fa-times').pause(500) // Hide Tour
      .click('.fa-users').pause(3000); //Teams
    // .assert()
    // client.end();
  }
}
