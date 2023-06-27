export const feature_items = '.features_items > div'
export const feature_items_addtocart_button = '.add-to-cart'
export const feature_items_modal_success = '.modal-header > h4'
export const feature_items_view_cart = '.modal-body > p'
export const viewcart_proceed = '.btn.btn-default.check_out'

export const hoverToProduct = (position: number) => {
  cy.get(feature_items).eq(position).should('be.visible').trigger('mouseover')
  cy.get(feature_items_addtocart_button).should('be.visible')
  return this
}

export const clickAddToCartButton = () => {
  cy.get(feature_items_addtocart_button).first().click()
  cy.get(feature_items_modal_success)
    .should('have.text', 'Added!')
    .and('be.visible')
  return this
}

export const clickViewCart = () => {
  cy.get(feature_items_view_cart).find('a').click()
  cy.get(viewcart_proceed).should('be.visible')
  return this
}
