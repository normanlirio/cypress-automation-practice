import { Checkout, FeatureItems, Payment, ViewCart } from '../utils/pages/'
import * as TestData from '../utils/TestData'

describe('Checkout e2e', () => {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('can checkout an order', () => {
    FeatureItems.hoverToProduct(3)
    FeatureItems.clickAddToCartButton()
    FeatureItems.clickViewCart()

    ViewCart.clickProceedToCheckout()

    Checkout.typeComment(TestData.comment)
    Checkout.placeOrder()

    Payment.typeCardName(TestData.card_name)
    Payment.typeCardNumber(TestData.card_number)
    Payment.typeCvc(TestData.cvc)
    Payment.typeExpiryMonth(TestData.expiry_month)
    Payment.typeExpiryYear(TestData.expiry_year)
    Payment.clickPayButton()
    Payment.confirmOrder(TestData.payment_done_header_text)
    Payment.continueToHomePage()
  })
})
