
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firtName: 'joao',
    lastName: 'Pedro',
    email: 'joao.pedro@gmail.com',
    text: 'Test.'
}) => {
    cy.get('#firstName').type(data.firtName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})
