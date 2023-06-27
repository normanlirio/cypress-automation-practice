export const login_button = '[data-qa="login-button"]'
export const login_email = '[data-qa="login-email"]'
export const login_form = '.login-form'
export const login_password = '[data-qa="login-password"]'
export const topMenu = '.shop-menu > .nav > li'

export const clickLoginButton = () => {
  cy.get(login_button).should('be.visible').click()
}

export const loginFormIsVisible = () => {
  cy.get(login_form).should('be.visible')
}

export const typeEmail = (email: string) => {
  cy.get(login_email).should('be.visible').type(email)
}

export const typePassword = (password: string) => {
  cy.get(login_password).should('be.visible').type(password)
}

export const assertLogin = (position: number) => {
  cy.get(topMenu)
    .eq(position)
    .should('be.visible')
    .find('a')
    .should('have.text', ' Logout')
}

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('login')
  cy.get(login_email).should('be.visible').type(email)
  cy.get(login_password).should('be.visible').type(password)
  cy.get(login_button).should('be.visible').click()
})
