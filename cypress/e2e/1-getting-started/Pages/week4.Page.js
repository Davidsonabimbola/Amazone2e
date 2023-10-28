class week4Obj{
    accessSearch(){
        return cy.get('#twotabsearchtextbox').type('bag')
    }
    buttonSearch(){
        return cy.get('#nav-search-submit-button').click()
    }
    bagSearch(){
        return 
        // cy.get('[class= "a-section aok-relative s-image-square-aspect"]')
        // cy.find('img [data-image-index="3"]').click
        // cy.find('[data-asin="B09MJVRDLW"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
        cy.get(' [data-asin="B09MJVRDLW"][class = "sg-col-inner"] ').click()
        
        
    }
    newSearch(){
        
        cy.get('#a-page')
        cy.get('div')
        // cy.get('div[class="a-section aok-relative s-image-square-aspect"]')
        cy.get('div[class="a-section a-spacing-base"]').eq(2).click()
        

    }

    addtoCart(){
        cy.get('div[class="a-button-stack"]')
        // cy.find('input[[value="Add to Cart"][type="submit"]')
        cy.get('#add-to-cart-button').click()
    }
    checkOut(){
        cy.get('#sw-atc-buy-box')
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
        // cy.find('input [type ="hidden"][value="1"]').click()
    }
    output(){
        // cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input')
        cy.get('.a-padding-medium')
        .should('exist')
    }
}
export default new week4Obj