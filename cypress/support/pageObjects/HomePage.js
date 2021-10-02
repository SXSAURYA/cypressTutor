class HomePage{

    searchTxtBox(){
        return cy.get('.search-keyword');
    }

    products(){
        return cy.get('.products');
    }

}

export default HomePage