export const brands_panel = '.brands-name'
export const category_panel = 'category-products'
export const feature_items = '.features_items > div'
export const feature_items_addtocart_button = '.add-to-cart'
export const feature_items_modal_success = '.modal-header > h4'
export const feature_items_view_cart = '.modal-body > p'

export const getBrandsPanel = () => {
  cy.get(brands_panel)
}

export const getCategoryPanel = () => {
  cy.get(category_panel)
}

export const getFeaturesItems = () => {
  cy.get(feature_items)
}
