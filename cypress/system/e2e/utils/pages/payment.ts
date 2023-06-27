export const feature_items = '.features_items > div'
export const payment_card_name = '[data-qa="name-on-card"]'
export const payment_card_number = '[data-qa="card-number"]'
export const payment_cvc = '[data-qa="cvc"]'
export const payment_expiry_month = '[data-qa="expiry-month"]'
export const payment_expiry_year = '[data-qa="expiry-year"]'
export const payment_paybutton = '[data-qa="pay-button"]'
export const paymentdone_continue_button = '[data-qa="continue-button"]'
export const paymentdone_header = '[data-qa="order-placed"]'

export const clickPayButton = () => {
  cy.get(payment_paybutton).should('be.visible').first().click()
}

export const confirmOrder = (headerText: string) => {
  cy.get(paymentdone_header)
    .should('be.visible')
    .and('contain.text', headerText)
}

export const continueToHomePage = () => {
  cy.get(paymentdone_continue_button).should('be.visible').first().click()
  cy.get(feature_items).should('be.visible')
}

export const typeCardName = (name: string) => {
  cy.get(payment_card_name).should('be.visible').clear().type(name)
}

export const typeCardNumber = (number: string) => {
  cy.get(payment_card_number).should('be.visible').clear().type(number)
}

export const typeCvc = (cvc: string) => {
  cy.get(payment_cvc).should('be.visible').clear().type(cvc)
}

export const typeExpiryMonth = (expiry: string) => {
  cy.get(payment_expiry_month).should('be.visible').clear().type(expiry)
}

export const typeExpiryYear = (expiry: string) => {
  cy.get(payment_expiry_year).should('be.visible').clear().type(expiry)
}
