/// <reference types="Cypress" />

describe("Testing Yettel.rs home page slider", () => {
  beforeEach("Visit Yettel Homepage", () => {
    cy.visit("https://www.yettel.rs/");
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
