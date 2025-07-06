class CustomerService
{
    validatePage()
    {
        cy.get("h1.fs-heading.bolded").should('contain', 'Welcome to Amazon Customer Service,')
        cy.contains('div', 'International shopping')
    }
    clickHelpTopics(value)
    {
        cy.contains('label', value).click()
    }
    clickTab(value)
    {
        cy.window().then((win) => { cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url; });});

        // Then click the element
        cy.contains('div.fs-match-card-title.full', 'Track your package').click();
        // validate:
        cy.contains('h1', 'Tracking your package').should('be.visible')
        cy.contains('a', 'Tracking your package').should('be.visible')
        cy.contains('p', 'Solving delivery problems').should('be.visible')
        cy.contains('h3', 'Quick solutions').should('be.visible')
    }
}
export default CustomerService