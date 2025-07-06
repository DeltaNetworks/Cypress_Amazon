import BaseUtils from "./BaseUtils"

class HomePage extends BaseUtils
{
    login(username, password)
    {
        cy.visit(this.amazonUrl)
        cy.wait(500)
        //cy.get('body').then($body => {
        //const button = $body.find('.a-button-text')
        //if (button.length > 0 && button.is(':visible')) 
            //{ 
                //cy.get('.a-button-text').click()
            //}
        //})
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.contains('span.nav-action-inner', 'Sign in').click()
        cy.get('#ap_email_login, #ap_email').clear().type(username)
        cy.get('.a-button-input').click()
        cy.get('#ap_password').clear().type(password)
        cy.get('#signInSubmit').click()
    }
    //searchProduct(value)
    //{
        //cy.get('input','#twotabsearchtextbox').type(value)
    //}
}
export default HomePage