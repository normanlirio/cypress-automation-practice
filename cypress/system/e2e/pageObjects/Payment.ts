import { feature_items } from './Selectors/homepage.selectors'
import * as PaymentSelectors from './Selectors/payment.selectors'

class Payment {
  clickPayButton() {
    cy.get(PaymentSelectors.payment_paybutton)
      .should('be.visible')
      .first()
      .click()
    return this
  }
  confirmOrder(headerText: string) {
    cy.get(PaymentSelectors.paymentdone_header)
      .should('be.visible')
      .and('contain.text', headerText)
    return this
  }
  continueToHomePage() {
    cy.get(PaymentSelectors.paymentdone_continue_button)
      .should('be.visible')
      .first()
      .click()
    cy.get(feature_items).should('be.visible')
  }
  typeCardName(name: string) {
    cy.get(PaymentSelectors.payment_card_name)
      .should('be.visible')
      .clear()
      .type(name)
    return this
  }
  typeCardNumber(number: string) {
    cy.get(PaymentSelectors.payment_card_number)
      .should('be.visible')
      .clear()
      .type(number)
    return this
  }
  typeCvc(cvc: string) {
    cy.get(PaymentSelectors.payment_cvc).should('be.visible').clear().type(cvc)
    return this
  }
  typeExpiryMonth(expiry: string) {
    cy.get(PaymentSelectors.payment_expiry_month)
      .should('be.visible')
      .clear()
      .type(expiry)
    return this
  }
  typeExpiryYear(expiry: string) {
    cy.get(PaymentSelectors.payment_expiry_year)
      .should('be.visible')
      .clear()
      .type(expiry)
    return this
  }
}

export default new Payment()
