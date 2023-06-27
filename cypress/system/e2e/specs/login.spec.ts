import { Login } from '../utils/pages'

describe('Login Page', () => {
  before(() => {
    cy.visit('login')
  })

  it('should login the user sucessfully', () => {
    Login.loginFormIsVisible()
    Login.typeEmail(Cypress.env('email'))
    Login.typePassword(Cypress.env('password'))
    Login.clickLoginButton()
    Login.assertLogin(3)
  })
})
