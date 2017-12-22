module.exports = {
  tags: ['Create Schedule'],
  'Create Schedule': function (client) {
    client
      .click('.add-schedule-overlay')
      .pause(3000)
      .assert.containsText('.skylight-dialog h2', 'Schedule Worker')
      // .expect.element('.label-container:nth-child(1)').text.to.equal('Shift Type')
      .assert.elementPresent('.user-selected');
  }
}
