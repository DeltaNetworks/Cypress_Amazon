class TopMenuTab
{
    validateTabs()
    {
        cy.get('#nav-link-fsz-in').should('have.text', 'Free Shipping Zone')
        cy.get(".nav-a[href='/gp/goldbox?ref_=nav_cs_gb']").should("have.text","Today's Deals")
        cy.get('[data-csa-c-content-id="nav_cs_prime_video"]').should("have.text","Prime Video")

    }
    click_CustomerService()
    {
        cy.get('[data-csa-c-content-id="nav_cs_help"]').click()
    }
}
export default TopMenuTab