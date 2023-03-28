/// <reference types="cypress" />
export {}

declare global {
  namespace Cypress {
    interface Chainable {
      atIndex(position): Chainable<Element>
      login(email: string, password: string): Chainable<void>
    }
  }
}
