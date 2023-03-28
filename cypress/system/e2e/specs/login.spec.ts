import Login from '../pageObjects/Login'

describe('Login Page', () => {
  before(() => {
    Login.nagivate('login')
  })

  it('should login the user sucessfully', () => {
    Login.loginFormIsVisible()
      .typeEmail(Cypress.env('email'))
      .typePassword(Cypress.env('password'))
      .clickLoginButton()
      .assertLogin(3)
  })
})
