///<reference types="cypress"/>
import { Login } from "../../pageObjects/login"

const login=new Login()

describe("Login Test suite",()=>{
    it("TC003 positive scenario",()=>{
     login.navigate()
     login.title()
         
    })
    it("TC004 positive scenario",()=>{
        login.navigate()
        login.title()
        login.loginBtn()
        login.username()
        login.password()
        login.submit()
        login.assert;
        
       })
       it("TC004 positive scenario",()=>{
        login.navigate()
        login.title()
        login.loginBtn()
        .username()
        .password()
        .submit()
        login.assert;
        
       })
})
/**
 * terminalde çalıştırmak için 
 * npx cypress run 
 * npx cypress run --spec "cypress\e2e\day02\firstTest.cy.js"
 * 
 * Farklı tarayıcıda çalıştırmak için
 * 
 * npx cypress run --browser firefox --spec "cypress\e2e\day1\firsttest.cy.js"
 * 
 */