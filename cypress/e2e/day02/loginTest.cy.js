///<reference types="cypress"/>

describe("Login Test suite",()=>{
    it("TC001 positive scenario",()=>{
        cy.visit('https://www.demoblaze.com/')
        //cy.viewport(1080,800)
        cy.viewport('macbook-16')
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('miky').wait(500)
        cy.get('#loginpassword').type('Test1234').wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser')
        .should('be.visible')
    })
})