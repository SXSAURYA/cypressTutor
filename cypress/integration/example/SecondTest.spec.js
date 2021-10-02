///  <reference types="cypress"/>

import HomePage from "../../support/pageObjects/HomePage";

var homePage = new HomePage();
//describe u will call same as Class 
describe('Checkout feature',function(){

    // -- "" -- "" -- ''
    it('Verify the checkout functionality', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.log('navigated to the respective url successfully')
        // find out element & type
        homePage.searchTxtBox().type('ca')
        cy.get('.product:visible').should('have.length',4)
        //$el .find 
        cy.get('.product').as('productLocator')

        // cy.get('@productLocator').find('.product:visible').each(($el,index,$list)=>{
        //   if ($el.find('.product-name').text().includes('Cashews')) {
        //       cy.log($el.find('.product-name').text())
        //       //$el.find('button').click()
        //       $el.find('button').trigger('click');
        //       cy.log('cashews is added successfully...')
        //   } else {
        //      //todo 
        //   }
        // });

        cy.addItemsToCart('.product-name','Cashews','button')

        //click on cart 
        cy.get('a.cart-icon').click({force:true})

        cy.get('div.action-block button').contains('PROCEED TO CHECKOUT').click({force:true})
        cy.get('div.container button:contains(Place Order)').click()
        //selecting element 
        cy.get('select').select('India')

        cy.get('input[type=\'checkbox\']').check();

        cy.get('button').click()

        cy.get('.products').should('have.text','Thank you, your order has been placed successfully  You\'ll be redirected to Home page shortly!!')
    });
})
