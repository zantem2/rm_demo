/// <reference types="Cypress" />
import Amazon from "../pageObjects/Amazon"

describe('visit Amazon', () => {
  
  /*
  Launch the Chrome browser.
 Navigate to the URL: "https://www.amazon.com/".
 Enter the product name "iphone" in the search bar.
 Click on the search button.
 Verify that the first result contains the text "Apple iPhone".
 Close the browser.
 */
  before(function() {
    
    cy.fixture('example').then(function(data) {
      this.data=data
    })
    cy.visit('https://www.amazon.com')
  }) 

  it('New iphone', function () {
    const amazon = new Amazon()
    amazon.getSearchbox().type(this.data.item)
    amazon.getSubmitButton().click()
    amazon.getSearchResults().eq(1).should(($res) => {
      expect($res).to.contain(this.data.checkItem)
    } )
  })
})