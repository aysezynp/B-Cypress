///<reference types="cypress" /> 

describe("first test suite",function(){
    it("test case 1",function(){
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').should('be.visible').type('cypress{enter}')
        cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
        //.should('have.text',"Cypress")
        .click()
    })
})

describe("Second test suite",()=>{
    it("test case 2",()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.title().should('eq','Wikipedia')
        cy.get('#searchInput').clear().type('cypress{enter}')
        cy.url().should('include','/wiki/Cypress')
        cy.get('h1').should('have.text','Cypress')
    })
})