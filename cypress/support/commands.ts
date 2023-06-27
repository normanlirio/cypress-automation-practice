/// <reference types="cypress" />

Cypress.Commands.add(
  'atIndex',
  { prevSubject: 'element' },
  (subject, pos: number) => {
    cy.wrap(subject).eq(pos)
  }
)
