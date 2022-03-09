/// <reference types="Cypress" />

describe("Testing Telenor.rs home page slider", () => {
  beforeEach("Visit Telenor Homepage", () => {
    cy.visit("https://www.telenor.rs/");
  });

  // Implicite Assertation
  it("Assert Slider - Implicite", () => {
    cy.url().should("be.equal", "https://www.yettel.rs/")

    cy.get("[aria-controls='navigation12']", { timeout: 15000 }).should(
      "have.class",
      "slick-active"
    );
  });

  // Explicite Assertation
  it("Assert Slider with hooks - Explicite", () => {
    cy.url().should("be.equal", "https://www.yettel.rs/")
    
    cy.get("[aria-controls='navigation12']", { timeout: 15000 }).should(
      ($x) => {
        expect($x).to.have.class("slick-active");
      }
    );
  });
});
