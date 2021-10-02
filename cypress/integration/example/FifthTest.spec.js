/// <reference types="cypress"/> 

describe("Shadom dom feature", () => {

    let users;
    before(function () {
        cy.fixture('example').then(function (example) {
            users = example;
            cy.log(example.partialProductName)
        })
    })

    it('Shadow dom test', () => {
        cy.visit("https://books-pwakit.appspot.com/")
        cy.get('book-app')
            .shadow()
            .find('app-header')
            .find('app-toolbar')
            // .find('book-input-decorator')
            .find('book-input-decorator')
            .find('#input')
            .click()
            .type(users.partialProductName, { force: true })
            .click()
    });
})