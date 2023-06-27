export const checkout_comment = 'textarea[name="message"]'
export const checkout_delivery_address = '#address_delivery'
export const checkout_place_order = '.btn.btn-default.check_out'

export const typeComment = (message: string) => {
  cy.get(checkout_comment).should('be.visible').type(message)
}

export const placeOrder = () => {
  cy.get(checkout_place_order)
    .should('be.visible')
    .and('have.text', 'Place Order')
    .first()
    .click()
}
