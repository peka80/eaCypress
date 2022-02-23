/// <reference types="Cypress" />

describe("Testing of EA app", () => {

  beforeEach("Visit EA Application website", () => {
    cy.visit("http://eaapp.somee.com/")
    cy.fixture("eauser").as("userlog")

    // Shortend version for alias
    cy.get("#loginLink").invoke("text").as("linkText")

    cy.contains("Login").click()

    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login")
    })

    cy.url().should("include", "/Account/Login")
  })
  
  it("Login application alias long version", () => {

    cy.get("@userlog").then((userlog) => {
      cy.get("#UserName").type(userlog.userName)
      cy.get("#Password").type(userlog.passWord)
    })
  
    cy.get(".btn").click()
    cy.get("a[title='Manage']").should("exist").and("be.visible")

    cy.contains("Employee List").click()

    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click()
  })

  it("Login application alias short version", () => {

    cy.get("@userlog").then((userlog) => {
      cy.get("#UserName").type(userlog.userName)
      cy.get("#Password").type(userlog.passWord)
    })

    cy.get(".btn").click()

    cy.contains("Employee List").click()
    cy.get("a[title='Manage']").should("exist").and("be.visible")

    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click()
  })

  it("Login application alias for UI operations", () => {

    cy.get("@userlog").then((userlog) => {
      cy.get("#UserName").type(userlog.userName)
      cy.get("#Password").type(userlog.passWord)
    })

    cy.get(".btn").click()
    cy.get("a[title='Manage']").should("exist").and("be.visible")

    cy.contains("Employee List").click()

    // Table - click on every tr element on page
    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click()

    cy.get(".table").find("tr").as("rows")

    cy.get("@rows").then(($row) => {
      cy.wrap($row).click({ multiple: true })
    })
  })

  it("Login application alias for UI operations", () => {

    cy.get("@userlog").then((userlog) => {
      cy.get("#UserName").type(userlog.userName)
      cy.get("#Password").type(userlog.passWord)
    })

    cy.get(".btn").click()
    cy.get("a[title='Manage']").should("exist").and("be.visible")

    // Click on Employee List
    cy.contains("Employee List").click()

    // Table - click on every tr element on page
    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click()

    cy.get(".table").find("tr").as("rows")

    cy.get("@rows").then(($row) => {
      cy.wrap($row).click({ multiple: true })
    })

    // Verify the value from a property
    cy.wrap({ name: "Ramesh" })
      .should("have.property", "name")
      .and("eq", "Ramesh")
  })

  it("Login application alias for UI operations", () => {

    cy.get("@userlog").then((userlog) => {
      cy.get("#UserName").type(userlog.userName)
      cy.get("#Password").type(userlog.passWord)
    })

    cy.get(".btn").click()
    cy.get("a[title='Manage']").should("exist").and("be.visible")

    // Click on Employee List
    cy.contains("Employee List").click()

    // Verify the value from a property
    cy.wrap({ name: "Ramesh" })
      .should("have.property", "name")
      .and("eq", "Ramesh")

    // Using wrap
    cy.get(".table")
      .find("tr > td")
      .then(($td) => {
        cy.wrap($td)
          .contains("John")
          .invoke("wrap")
          .parent()
          .contains("Benefits")
          .click()
      })
  })

  afterEach("Log off", () => {
    cy.get("a").contains("Log off").click()

    cy.get("#registerLink").should("exist").and("be.visible")
    cy.get("#loginLink").should("exist").and("be.visible")
  });
})
