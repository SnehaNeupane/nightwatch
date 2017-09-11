module.exports = {
  tags: ['Click on tile and go to teams page'],
  'Click on WorkStream Tile': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    // client.expect.element('body').to.be.present;
    client
      .pause(4000)
      .execute(function () {
        document.querySelector('.tiles').click();
      })
      .pause(17000)
      // .assert.hidden('.faded-font')
      .assert.elementPresent('.fa-times')
      .click('.fa-times').pause(500) // Hide Tour
      .assert.elementPresent('.fa-users')
      .click('.fa-users').pause(5000); //Teams
    // .assert()
    // client.end();
  }
}
