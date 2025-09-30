describe("Shows Appeteasers", () => {
  it("Connect to Dev Server", () => {
    cy.visit("https://hangryhippo.quantic.host/");
  });
  it("selects Handhelds", () => {
    //TODO: Add a test to check Handhelds
    cy.contains("Handhelds").click();
    cy.contains("Cheese Burger");
    cy.contains("Fajita Tacos");
  });
  it("selects Appeteasers", () => {
    //TODO: Add a test to check Appeteasers
    cy.contains("Appeteasers").click();
    cy.contains("Tater Tots");
    cy.contains("Buffalo Wings");
    cy.contains("Cheese Burger").should("not.exist");
    cy.contains("Fajita Tacos").should("not.exist");
  });
});
