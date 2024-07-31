describe('The loan calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays the loan amount question when page load completes', () => {
    cy.findByLabelText('How much loan are you looking at?').should('exist')
  })

  it('displays all four questions one by one when previous one is answered', () => {
    cy.findByLabelText('How much loan are you looking at?').type(90121)
    cy.findByLabelText('How will the loan be used?').should('exist')
    cy.findByLabelText('How will the loan be used?').select('Financing a property')
    cy.findByLabelText('How frequent the loan will be paid?').should('exist')
    cy.findByLabelText('How frequent the loan will be paid?').select('Weekly')
    cy.findByLabelText('How long will the loan term be?').should('exist')
  })
})
