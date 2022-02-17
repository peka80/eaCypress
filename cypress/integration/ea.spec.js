/// <reference types="Cypress" />

describe("Testing of EA app", () => {
  it("Login application alias long version", () => {
    cy.visit("http://eaapp.somee.com/");

    // Long code version for alias
    cy.get("#loginLink")
      .then(($link) => {
        return $link.text();
      })
      .as("linkText");

    cy.contains("Login").click();

    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login");
    });

    cy.url().should("include", "/Account/Login");

    cy.get("#UserName").type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn").click();

    cy.contains("Employee List").click();

    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click();
  });

  it("Login application alias short version", () => {
    cy.visit("http://eaapp.somee.com/");

    // Shortend version for alias
    cy.get("#loginLink").invoke("text").as("linkText");

    cy.contains("Login").click();

    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login");
    });

    cy.url().should("include", "/Account/Login");

    cy.get("#UserName").type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn").click();

    cy.contains("Employee List").click();

    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click();
  });

  it("`Login application alias for UI operations", () => {
    cy.visit("http://eaapp.somee.com/");

    // Shortend version for alias
    cy.get("#loginLink").invoke("text").as("linkText");

    cy.contains("Login").click();

    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login");
    });

    cy.url().should("include", "/Account/Login");

    cy.get("#UserName").type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn").click();

    cy.contains("Employee List").click();

    // Table - click on every tr element on page
    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click();

    cy.get(".table").find("tr").as("rows");

    cy.get("@rows").then(($row) => {
      cy.wrap($row).click({ multiple: true });
    });
  });

  it("`Login application alias for UI operations", () => {
    cy.visit("http://eaapp.somee.com/");

    // Shortend version for alias
    cy.get("#loginLink").invoke("text").as("linkText");

    cy.contains("Login").click();

    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login");
    });

    cy.url().should("include", "/Account/Login");

    cy.get("#UserName").type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn").click();

    // Click on Employee List
    cy.contains("Employee List").click();

    // Table - click on every tr element on page
    cy.get(".table")
      .find("tr")
      .contains("Prashanth")
      .parent()
      .contains("Benefits")
      .click();

    cy.get(".table").find("tr").as("rows");

    cy.get("@rows").then(($row) => {
      cy.wrap($row).click({ multiple: true });
    });

    // Verify the value from a property
    cy.wrap({ name: "Ramesh" })
      .should("have.property", "name")
      .and("eq", "Ramesh");
  });

  it("`Login application alias for UI operations", () => {
    cy.visit("http://eaapp.somee.com/");

    // Shortend version for alias
    cy.get("#loginLink").invoke("text").as("linkText");

    cy.contains("Login").click();

    cy.get("@linkText").then(($x) => {
      expect($x).is.eql("Login");
    });

    cy.url().should("include", "/Account/Login");

    cy.get("#UserName").type("admin");
    cy.get("#Password").type("password");
    cy.get(".btn").click();

    // Click on Employee List
    cy.contains("Employee List").click();

    // Verify the value from a property
    cy.wrap({ name: "Ramesh" })
      .should("have.property", "name")
      .and("eq", "Ramesh");

    // Using wrap
    cy.get(".table")
      .find("tr > td")
      .then(($td) => {
        cy.wrap($td)
          .contains("John")
          .invoke("wrap")
          .parent()
          .contains("Benefits")
          .click();
      });
  });
});
