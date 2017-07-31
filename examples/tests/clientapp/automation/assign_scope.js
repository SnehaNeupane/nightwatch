module.exports = {
  tags: ['Assign Scope'],
  'Assign Scope': function (client) {
    client
      .click('.client-block div:nth-of-type(2)').pause(1000) //Click client block
      .click('.btn.btn-primary').pause(500) //Change Scope
      .click('.modal-footer .btn-primary').pause(500); //Yes
  }
}
