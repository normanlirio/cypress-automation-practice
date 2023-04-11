import FeatureItems from '../pageObjects/FeatureItems'

describe('Checkout e2e', () => {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('checkout an order', () => {
    FeatureItems.hoverToProduct(3).clickAddToCartButton().clickViewCart()
  })
})
