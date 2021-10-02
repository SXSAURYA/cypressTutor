/// <reference types="cypress"/> 
/// <reference types="cypress-iframe"/> 

describe("Iframe feature",()=>{
    it('Iframe test', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*=\'lifetime\']').contains('All Access plan').click({force:true});
    });
})