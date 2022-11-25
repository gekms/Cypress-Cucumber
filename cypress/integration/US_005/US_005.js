

Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given } from "cypress-cucumber-preprocessor/steps";
  
  Given('user is on Canada Drives Bank page',()=>{
  
    cy.visit('https://gmibank.com/');
  
  
  })
  Given('user clicks Ontario Province button',()=>{
  
    cy.get('#account-menu > .dropdown-toggle').click()
    cy.get('#login-item').click()
  
  
  })
  Given('user selects GrandCaravan From Dropdown List',()=>{
  
    cy.get('#username').type('Team73Adminn')
    cy.get('#password').type('Team73++')
  
  
  })
  Given('user sorts filter from Low to high',()=>{
  
    cy.get('#username').type('Team73Adminn')
    cy.get('#password').type('Team73+')
  
  
  })
  Given('user signs up for an account under Grand Caravan Vehicle',()=>{
  
    cy.get('#username').type('Team73Admin')
    cy.get('#password').type('Team73++')
  
  
  })
  Given('user pick up avavilble GrandCaravan Vehicle',()=>{
  
    cy.get('.btn-primary').click()
  
  
  })
  Given('User choose delivery address duration and payment Method',()=>{
  
    cy.get(':nth-child(1) > .alert').should('contains.text','Failed to sign in! Please check your credentials and try again.')
  
  
  })
  