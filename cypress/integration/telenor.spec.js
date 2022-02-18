/// <reference types="Cypress" />

describe("Testing Telenor.rs home page slider", () => {
  it("Visit Telenor.rs website - Implicite", () => {
    cy.visit("https://www.telenor.rs/");

    cy.get("[aria-controls='navigation12']", { timeout: 15000 }).should(
      "have.class",
      "slick-active"
    );
  });

  it("Visit Telenor.rs website - Explicite", () => {
    cy.visit("https://www.telenor.rs/");

    cy.get("[aria-controls='navigation12']", { timeout: 15000 }).should(
      ($x) => {
        expect($x).to.have.class("slick-active");
      }
    );
  });
});
