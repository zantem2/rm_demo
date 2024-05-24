class Amazon {

getSearchbox() { return  cy.get('#twotabsearchtextbox') }
getSubmitButton() { return cy.get('#nav-search-submit-button')}
getSearchResults() { return cy.get('div[data-component-type="s-search-result"]')}

}

export default Amazon;