export const checkout_delivery_address = '#address_delivery'
export const viewcart_proceed = '.btn.btn-default.check_out'

export const clickProceedToCheckout = () => {
  cy.get(viewcart_proceed).should('be.visible').click()
  cy.get(checkout_delivery_address).should('be.visible')
}
