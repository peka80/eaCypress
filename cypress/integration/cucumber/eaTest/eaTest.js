import { Given, And, Then } from "cypress-cucumber-preprocessor/steps"

Given(`I visit EA site`, () => {
  //Visit EA Application website
  cy.visit("/")
})

Given(`I click login link`, () => {
  cy.contains("Login").click()

  cy.url().should("include", "/Account/Login")
})

Given(`I login as user with {string} and {string}`, (userName, password) => {
  //Enter username and password
  cy.get("#UserName").type(userName)
  cy.get("#Password").type(password, {log:false})
  cy.get(".btn").click()
})

And(`Logoff from site`, () => {
  cy.get("a").contains("Log off").click()

  cy.get("#registerLink").should("exist").and("be.visible")
  cy.get("#loginLink").should("exist").and("be.visible")
})
