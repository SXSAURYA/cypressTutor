/// <reference types="cypress"/> 
// this is one ts 

describe("Checking first test", () => {
    let data;
    before(function(){
        cy.fixture('example').then((example)=>{
            data = example;
        })
    })
    it('Going to site & searh', () => {
        //driver.get --  driver.find -- WebElement 
        // contains  --  cy.get('').contains(Cashews).click()
        // Enter -- selenium -- google.com -- 
        cy.visit(Cypress.env("testUrl"))
        // cy.pause()
        cy.get('a.noo-search').then(($sel) => {
           $sel.trigger('click')
        })

        //driver.find.sendKeys()
        //driver.find.sendKeys(Keys.chord(Keys.Enter,Keys.cntrl))
        cy.get("input[type='search']").type(data.partialProductName+'{Enter}', { force: true })
        cy.url().should('contain.text','Test')
    });
})