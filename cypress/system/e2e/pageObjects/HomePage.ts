import * as FeatureItems from './Selectors/homepage.selectors'
export class HomePage {
  getBrandsPanel() {
    return cy.get(FeatureItems.brands_panel)
  }

  getCategoryPanel() {
    return cy.get(FeatureItems.category_panel)
  }

  getFeaturesItems() {
    return cy.get(FeatureItems.feature_items)
  }
}
