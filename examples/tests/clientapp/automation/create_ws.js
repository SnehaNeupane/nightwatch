module.exports = {
  tags: ['Workstream Creation'],
  'Start a Workstream': function (client) {
    // client
    //   .url('https://appnxt.cloudfactory.com')
    //   .pause(500);
    // client.expect.element('body').to.be.present;
    client
      .pause(2000)
      .assert.elementPresent('.new-project-button')
      .click('.new-project-button').pause(4000)
      .setValue('#project_name', 'Wrapper #PR').pause(100)
      .setValue('#project_description', 'Lorem ipsum').pause(100)
      .click('.btn-primary').pause(7000);
    client.end();
  }
}
