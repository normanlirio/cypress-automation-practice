/// <reference types="cypress" />

import * as LoginSelectors from '../system/e2e/pageObjects/Selectors/login.selectors'

Cypress.Commands.add(
  'atIndex',
  { prevSubject: 'element' },
  (subject, pos: number) => {
    cy.wrap(subject).eq(pos)
  }
)

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('login')
  cy.get(LoginSelectors.login_email).should('be.visible').type(email)
  cy.get(LoginSelectors.login_password).should('be.visible').type(password)
  cy.get(LoginSelectors.login_button).should('be.visible').click()
})
