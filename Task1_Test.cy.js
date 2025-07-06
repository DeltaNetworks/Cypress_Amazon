/// <reference types="cypress" />
import CustomerService from '../support/PageObjects/CustomerSrvice'
import HomePage from '../support/PageObjects/HomePage'
import TopMenuTab from '../support/PageObjects/TopMenuTab'

describe('use customer service page', function () {
  it('validate customer service page', function () {
    cy.fixture('credentials.json').then((creds) => {
      const homepage = new HomePage();
      homepage.login(creds.user_name, creds.user_pass)
    const topmenutab = new TopMenuTab();
    topmenutab.validateTabs();
    topmenutab.click_CustomerService();
    const customerservice = new CustomerService();
    customerservice.validatePage();
    customerservice.clickHelpTopics("Where's my stuff");
    customerservice.clickTab("Track your package");
  });
});
});