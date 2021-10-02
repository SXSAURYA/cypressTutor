///  <reference types="cypress"/>

//describe u will call same as Class 
describe('Alert, list box feature',function(){

    // -- "" -- "" -- ''
    xit('Verify list box functionality', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('Ind')
 
        //trigger -- basically for invoking events -- click, hover..
        // invoke -- we use to invoke the properties 
        cy.get('ul#ui-id-1 li').each(($el,index,$list)=>{
            if ($el.text()==='India') {
                cy.log(`select ${($el.text())}`)
                $el.trigger('click');
            }
        })
    });

    xit('Checking the visiblity of element', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')
    });

    it('Handling alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click();
        // on method -- will handle events 
        cy.on('window:alert',(txt)=>expect(txt).to.equal('Hello , share this practice page and share your knowledge'));
        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(txt)=>expect(txt).to.equal('Hello , Are you sure you want to confirm?'));
    });

    xit('Handling new tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target')
        cy.get('#opentab').click()
        cy.go('back')
    });

    xit('Handling Web tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table#product[name=\'courses\'] tbody').find('tr').each(($el,index,$list)=>{
            // == -- it just check the data value 
            // ===  -- it will data value & data type 
            if ($el.find('td:nth-child(2)').text()==='Master Selenium Automation in simple Python Language') {
                cy.log(`course name ${($el.find('td:nth-child(2)').text())}`)
                cy.get('table#product[name=\'courses\'] tbody td:nth-child(2)').eq(index-1).next().then((price)=>{
                    cy.log(price.text())
                    expect(price.text()).to.equal('25')
                    cy.log(expect(parseInt(price.text())).to.equal(25))
                })
            }
        })
    });

    xit('Handling mouse hover without click', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.get('div.mouse-hover-content').find('a').contains('Top').click();
    });
})
