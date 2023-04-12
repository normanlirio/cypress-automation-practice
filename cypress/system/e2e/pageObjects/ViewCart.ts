import { checkout_delivery_address } from './Selectors/checkout.selectors'
import { viewcart_proceed } from './Selectors/viewcart.selectors'

class ViewCart {
  clickProceedToCheckout() {
    cy.get(viewcart_proceed).should('be.visible').click()
    cy.get(checkout_delivery_address).should('be.visible')
  }
}

export default new ViewCart()
