// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addItemsToCart',(productLocator,itemNameLocator,itemName,buttonLocator)=>{
 
    cy.get(productLocator).each(($el,index,$list)=>{
        if ($el.find(itemNameLocator).text().includes(itemName)) {
            cy.log($el.find(itemNameLocator).text())
            //$el.find('button').click()
            $el.find(buttonLocator).trigger('click');
            cy.log('cashews is added successfully...')
        } else {
           //todo 
        }
      });
})

