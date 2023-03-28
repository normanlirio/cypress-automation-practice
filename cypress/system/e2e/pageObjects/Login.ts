import { BasePage } from './BasePage'
import * as LoginSelectors from './Selectors/login.selectors'
import * as TopMenuSelectors from './Selectors/topmenubar.selectors'

class Login extends BasePage {
  clickLoginButton() {
    cy.get(LoginSelectors.login_button).should('be.visible').click()
    return this
  }

  loginFormIsVisible() {
    this.elementIsVisible(LoginSelectors.login_form)
    return this
  }

  typeEmail(email: string) {
    cy.get(LoginSelectors.login_email).should('be.visible').type(email)
    return this
  }

  typePassword(password: string) {
    cy.get(LoginSelectors.login_password).should('be.visible').type(password)
    return this
  }
  assertLogin(position: number) {
    cy.get(TopMenuSelectors.topMenu)
      .eq(position)
      .should('be.visible')
      .find('a')
      .should('have.text', ' Logout')
    return this
  }
}

export default new Login()
