module.exports = {
  tags: ['Assign Scope'],
  'Assign Scope': function (client) {
    client
      .click('.client-block div:nth-of-type(1)').pause(1000) //Click client block
      // .execute(function () {
      //   document.querySelector('.btn.btn-primary').click()
      // })
      // .pause(1000)
      .click('.btn.btn-primary').pause(500) //Change Scope
      .click('.modal-footer .btn-primary').pause(1000); //Yes
  }
}
