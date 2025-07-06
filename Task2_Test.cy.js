/// <reference types="cypress" />
import HomePage from '../support/PageObjects/HomePage'
import CartPage from '../support/PageObjects/CartPage'

describe('Amazon Add To Cart', function () {
  it('Amazon Add To Cart', function () {
    cy.fixture('credentials.json').then((creds) => {
      const homepage = new HomePage();
      homepage.login(creds.user_name, creds.user_pass);
      const cart = new CartPage()
      cart.searchProduct(cart.sharpner)
      cart.ClickAddToCart("#a-autoid-3-announce")
      cart.goTo(cart.url_scissors)
      cart.IsElementDisplay(cart.scissors_image)
      cart.clickImageProduct(cart.scissors_yellow_gray_blue)
      cart.ClickAddToCart("#add-to-cart-button")
      cart.validateAddedToCart('h1','Added to cart');
      cart.clickGoToCart()
      cart.validateShippingFee('Shipping fee applies to this item')
      cart.clickIncrementProduct(1, 3)
      cart.validateShippingFee('free shipping')
      afterEach(() => { CartPage.emptyCart(); });
  })
})
});