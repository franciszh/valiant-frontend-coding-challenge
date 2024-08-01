describe('The loan calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays the loan amount question when page load completes', () => {
    cy.findByLabelText('How much would you like to borrow?').should('exist')
  })

  it('display the result when each question is answered correctly', () => {
    cy.findByLabelText('How much would you like to borrow?').type(30000)
    cy.findByLabelText('How would the loan be used?').should('exist')
    cy.findByLabelText('How would the loan be used?').select('Day-to-day capital')
    cy.findByLabelText('How frequent the loan would be paid?').should('exist')
    cy.findByLabelText('How frequent the loan would be paid?').select('Monthly')
    cy.findByLabelText('How long would the loan term be?').should('exist')
    cy.findByLabelText('How long would the loan term be?').select('2 years')
    cy.findByText('$1,384 per instalment').should('exist')
    cy.findByText('$33,216 over the loan term').should('exist')
  })

  it('display the error message when the loan amount input is invalid', () => {
    cy.findByLabelText('How much would you like to borrow?').type('thisIsAString')
    cy.findByText('Please enter a number').should('exist')
    cy.findByLabelText('How would the loan be used?').should('not.exist')
  })
})
