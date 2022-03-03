/// <reference types="Cypress" />

describe("Testing of EA app", () => {
  beforeEach("Visit EA Application website", () => {
    cy.visit("/")
    cy.fixture("eauser").as("userlog")

    cy.get("@userlog").then((userlog) => {
      cy.login(userlog.userName, userlog.passWord)
    })
  })

  it("Login application alias long version", () => {
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
    cy.get("a[title='Manage']").should("exist").and("be.visible")

    cy.contains("Employee List").click()

    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click()
  })

  it("Login application alias for UI operations", () => {
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
  })
})
