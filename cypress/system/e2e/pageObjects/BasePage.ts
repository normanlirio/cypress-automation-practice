export class BasePage {
  nagivate(url: string) {
    cy.visit(url)
    return this
  }

  elementIsVisible(element: string) {
    cy.get(element).should('be.visible')
  }
}
