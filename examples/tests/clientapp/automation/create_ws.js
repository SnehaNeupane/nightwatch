module.exports = {
  tags: ['Workstream Creation'],
  'Start a Workstream': function (client) {
    client
      .url('https://appnxt.cloudfactory.com')
      .pause(500);
    client.expect.element('body').to.be.present;
    client
      .pause(2000)
      .click('.new-project-button').pause(2000)
      .setValue('#project_name', 'Wrapper Pr').pause(100)
      .setValue('#project_description', 'Lorem ipsum').pause(100)
      .click('.btn-primary').pause(5000);
    client.end();
  }
}
