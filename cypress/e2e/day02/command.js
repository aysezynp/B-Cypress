/** https://docs.cypress.io/api/cypress-api/custom-commands
 * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */

/**
 * Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

    /**
     * Examples of dual commands:
      cy.contains()
      cy.screenshot()
      cy.scrollTo()
      cy.wait()
     */

    // cypres reference type
///<reference types="cypress"/>

   //visit
cy.visit('open url')
cy.visit('url',{timeout : 10000})

//should is a promise in here
cy.url().should('include',path)

//finding element
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('not.be.visible')

cy.get("h1").should('have.text','table of Contents')
cy.get('input').should('have.value','James')

//parent to child or child to parent
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()

cy.get(loc).next().click()

cy.go('back')//come to previous page
cy.get('tbody tr').nextAll().click({multiple:true})

cy.get(loc).prev().click() // previous one
cy.get(loc).prevAll().click()

//position handling
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()
cy.get(loc).trigger('mousedown').click()

//login
cy.get('#username').clear().type('username')