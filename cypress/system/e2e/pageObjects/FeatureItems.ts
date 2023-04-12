import { HomePage } from './HomePage'
import * as FeatureItemsSelectors from './Selectors/homepage.selectors'
import { viewcart_proceed } from './Selectors/viewcart.selectors'

class FeatureItems extends HomePage {
  hoverToProduct(position: number) {
    this.getFeaturesItems()
      .eq(position)
      .should('be.visible')
      .trigger('mouseover')
    cy.get(FeatureItemsSelectors.feature_items_addtocart_button).should(
      'be.visible'
    )
    return this
  }

  clickAddToCartButton() {
    cy.get(FeatureItemsSelectors.feature_items_addtocart_button).first().click()
    cy.get(FeatureItemsSelectors.feature_items_modal_success)
      .should('have.text', 'Added!')
      .and('be.visible')
    return this
  }

  clickViewCart() {
    cy.get(FeatureItemsSelectors.feature_items_view_cart).find('a').click()
    cy.get(viewcart_proceed).should('be.visible')
    return this
  }
}

export default new FeatureItems()
