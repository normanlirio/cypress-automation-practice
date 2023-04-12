import Checkout from '../pageObjects/Checkout'
import FeatureItems from '../pageObjects/FeatureItems'
import Payment from '../pageObjects/Payment'
import ViewCart from '../pageObjects/ViewCart'
import * as TestData from '../utils/TestData'

describe('Checkout e2e', () => {
  before(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('can checkout an order', () => {
    FeatureItems.hoverToProduct(3).clickAddToCartButton().clickViewCart()

    ViewCart.clickProceedToCheckout()

    Checkout.typeComment(TestData.comment).placeOrder()

    Payment.typeCardName(TestData.card_name)
      .typeCardNumber(TestData.card_number)
      .typeCvc(TestData.cvc)
      .typeExpiryMonth(TestData.expiry_month)
      .typeExpiryYear(TestData.expiry_year)
      .clickPayButton()
      .confirmOrder(TestData.payment_done_header_text)
      .continueToHomePage()
  })
})
