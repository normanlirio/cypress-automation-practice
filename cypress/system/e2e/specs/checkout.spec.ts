describe('Checkout e2e', () => {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('can add item to cart', () => {})
})
