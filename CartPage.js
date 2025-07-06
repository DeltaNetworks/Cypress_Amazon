import BaseUtils from "./BaseUtils"

class CartPage extends BaseUtils
{
    url_scissors = "https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z"
    sharpner = 'Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue (EPS4-BLUE)'
    scissors_image = "img[alt*='Scissors, iBayam 8']"
    scissors_yellow_gray_blue = 'input.a-button-input[name="1"][role="radio"][type="submit"][aria-posinset="3"]'
    
    ClickAddToCart(value)
    {
        cy.get(value, 'Add to cart').click()

        // validate product is added, by side-bar is visible
        cy.get('.a-row ewc-subtotal').should('be.visible')
    }
    clickImageProduct(value)
    {
        cy.get(value).click()
        cy.get('a-size-base a-color-base inline-twister-dim-title-value a-text-bold', 'Yellow, Grey, Blue').should('be.visible')
    }
    validateAddedToCart(tag, value)
    {
        cy.contains('h1','Added to cart').should('be.visible')
    }
    clickGoToCart()
    {
        cy.contains('a', 'Go to Cart').should('be.visible').click();
    }
    validateShippingFee(value)
    {
        cy.get('span.a-size-small.a-color-secondary.sc-product-sss').should('contain.text', value).should('be.visible');
    }
    clickIncrementProduct(index, repeat)
    {
        for (let i = 0; i < repeat; i++) 
        {
            cy.get('span[data-a-selector*="increment-"]').eq(index).click();
        }
    }
    emptyCart() 
    {
        cy.get('input[value="Delete"]').each(($btn) => {
        cy.wrap($btn).click();
    });
  }
}
export default CartPage