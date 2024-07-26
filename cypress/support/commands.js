Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
  cy.get('#firstName').type('Felipe')
  cy.get('#lastName').type('Zacarias')
  cy.get('#email').type('felipe@teste.com')
  cy.get('#open-text-area').type('TESTE')
  cy.contains('button', 'Enviar').click()
})