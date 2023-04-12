import * as CheckoutSelectors from './Selectors/checkout.selectors'

class Checkout {
  typeComment(message: string) {
    cy.get(CheckoutSelectors.checkout_comment)
      .should('be.visible')
      .type(message)
    return this
  }

  placeOrder() {
    cy.get(CheckoutSelectors.checkout_place_order)
      .should('be.visible')
      .and('have.text', 'Place Order')
      .first()
      .click()
  }
}

export default new Checkout()
