
///<reference types="cypress" /> 
describe('Web Elements',()=>{

    it('First Test',()=>{

        //tag name
        cy.get('input')
        //By ID
        cy.get('#email')
        //By classname
        cy.get('.form-label')
        cy.get('.small.mb-0')
        //By Attribute name
        cy.get('[type]')
        //By Attribute name and value
        cy.get('[type="checkbox"]')
        //By tag name and attribute with value
        cy.get('input[type="checkbox"]')
        //By two different attributes or more
        cy.get('[type="checkbox"][name="remember"]')

        cy.contains('Blue').click()

    })
})