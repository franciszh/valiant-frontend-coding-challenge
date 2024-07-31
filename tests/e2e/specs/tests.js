describe('The loan calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays the loan amount question when page load completes', () => {
    cy.findByLabelText('How much loan are you looking at?').should('exist')
  })

  it('displays all four questions one by one when previous one is answered', () => {
    cy.findByLabelText('How much loan are you looking at?').type(30000)
    cy.findByLabelText('How will the loan be used?').should('exist')
    cy.findByLabelText('How will the loan be used?').select('Day-to-day capital')
    cy.findByLabelText('How frequent the loan will be paid?').should('exist')
    cy.findByLabelText('How frequent the loan will be paid?').select('Monthly')
    cy.findByLabelText('How long will the loan term be?').should('exist')
    cy.findByLabelText('How long will the loan term be?').select('2 years')
    cy.findByText('You are expected to repay $1384 per instalment and totally $33216 over the loan term').should('exist')
  })
})
