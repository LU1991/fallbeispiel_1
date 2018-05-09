describe('Check Responsiveness', function () {
  beforeEach(function () {
    cy.visit('http://localhost/Laura/EPS/Fallbeispiel_1/')
  })

  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://localhost/Laura/EPS/Fallbeispiel_1/')
    cy.title().should('include', 'Kosmetikstudio')
    //cy.viewport(320, 480)
    //cy.viewport('macbook-15')
    //cy.viewport('iphone-6+')
  })
    
  it('has mobile navigation when window size is < 500', function() {
    cy.viewport(500, 600)
    cy.get('#toggler').should('be.visible')
  })


  it('can be navigated to "Preise" from Browser', function () {
    cy.get('#preise').click()
    cy.url().should('contain', '/preise')
  })

  it('can be navigated to "Preise" from mobile device', function () {
    cy.viewport(500, 600)
    cy.get('#toggler').click()
    cy.get('#preise').click()
    cy.url().should('contain', '/preise')
  })
      
})