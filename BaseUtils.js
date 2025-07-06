class BaseUtils
{
    amazonUrl = "https://www.amazon.com"
    goTo(url)
    {
        cy.visit(url)
    }
    searchProduct(value)
    {
        // search in top search-bar
        cy.get('input','#twotabsearchtextbox').type(value)
    }
    IsElementDisplay(value)
    {
        cy.get(value).should('be.visible')
    }
}
export default BaseUtils