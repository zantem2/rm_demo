/// <reference types="Cypress" />



describe('api test', () => {
  
  /*
API Automation:
Note:- If you are applying for NFT role, please demonstrate load on this API Automation example with 2 users
Make a request to any one or multiple API endpoints from the given list of test APIs and demonstrate one example each of POST, PUT, GET, DELETE (can use any other test API as well, below are just few examples)

https://jsonplaceholder.typicode.com/
 https://reqres.in/
 https://petstore.swagger.io/
 https://my-json-server.typicode.com/
 https://mockbin.org/

Verify that the API returns a successful response, by adding appropriate assertions 
 */

  it('Get', function () {
    cy.request('https://jsonplaceholder.typicode.com/posts/1').then(function(response) {

        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('userId',1)
        expect(response.body).to.have.property('id',1)
    }) 
  })

//update
  it('Put', function () {
    cy.request({
      method: 'PUT',
      url:'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'update title',
        body: 'update body',
        userId: 1
      }
    }).then(function(response) {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('userId',1)
      expect(response.body).to.have.property('id',1)
      expect(response.body).to.have.property('title','update title')
      expect(response.body).to.have.property('body','update body')
    })  
  })

  it('Post', function () {
    cy.request({
      method: 'POST',
      url:'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'test',
        body: 'blah',
        userId: 956
      }
    }).then(function(response) {
      
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('userId',956)
      expect(response.body).to.have.property('id',101) //according to docs 101 is returned in dummy API
      expect(response.body).to.have.property('title','test')
      expect(response.body).to.have.property('body','blah')
    })
  })

  it('Delete', function () {
    cy.request({
      method: 'DELETE',
      url:'https://jsonplaceholder.typicode.com/posts/1'}).then(function(response) {
        expect(response.status).to.eq(200)
        //dummy API just returns confirmation
    }) 

  })
  

})