describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/products');
    cy.contains('app is running');
  });
});
