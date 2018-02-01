module.exports = {
  tags: ['Overall Schedule'],
  'Overall Schedule': function (client) {
    client
      .execute(function () {
        $('.navbar-nav').eq(0).find('li:nth-of-type(2) a')[0].click();
      })
      .pause(7000)
      .assert.containsText('.active', 'Schedule')
      .assert.containsText('#admin_nav li:nth-child(2) a', 'Timesheets')
      .assert.containsText('#admin_nav li:nth-child(3) a', 'Time Off')
      .assert.containsText('#admin_nav li:nth-child(4) a', 'Open Shift');
  }
}
