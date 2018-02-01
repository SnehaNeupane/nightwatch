module.exports = {
  tags: ['Create Schedule'],
  'Create Schedule': function (client) {
    client
      .click('.add-schedule-overlay')
      .pause(3000)
      .assert.containsText('.skylight-dialog h2', 'Schedule Worker')
      // .expect.element('.label-container:nth-child(1)').text.to.equal('Shift Type')
      .assert.elementPresent('.user-selected')
      // .setValue('.select-tool', 'rXxiOEMsT2CIjtoSmxYQ').pause(1000)
      // .elements('css selector', '.select-tool', function (result) {
      //   return result.value.length;
      // })
      // .click('.select-tool')
      .click('.select-tool')
      .click('.select-tool .Select-option[id*="react-select-7--option-1"]')
      // .click(‘.Select-value-label’) .click(‘.Select-option[id*=”-option-1”]’)

      .click('#create-schedule').pause(2000);
  }
}
