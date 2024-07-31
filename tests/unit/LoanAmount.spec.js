import { describe, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import LoanAmount from '../../src/components/LoanAmount.vue'

describe('LoanAmount', () => {
  it('should render with the correct label', () => {
    const { getByLabelText } = render(LoanAmount)
    expect(getByLabelText('How much loan are you looking at?')).toBeInTheDocument()
  })

  it('should trigger the error message when input is not a number', async () => {
    const { getByLabelText, getByRole } = render(LoanAmount)
    const loanAmountInput = getByLabelText('How much loan are you looking at?')
    await fireEvent.update(loanAmountInput, 'foo')
    const errorMessage = getByRole('alert')
    expect(errorMessage.innerHTML).toBe('Please enter a number please')
  })

  it('should trigger the error message when input is less than 1000', async () => {
    const { getByLabelText, getByRole } = render(LoanAmount)
    const loanAmountInput = getByLabelText('How much loan are you looking at?')
    await fireEvent.update(loanAmountInput, 999)
    const errorMessage = getByRole('alert')
    expect(errorMessage.innerHTML).toBe('Sorry, we only provide loans in the range of one thousand dollars to twenty million dollars')
  })

  it('should trigger the error message when input is over 20 million', async () => {
    const { getByLabelText, getByRole } = render(LoanAmount)
    const loanAmountInput = getByLabelText('How much loan are you looking at?')
    await fireEvent.update(loanAmountInput, 20000001)
    const errorMessage = getByRole('alert')
    expect(errorMessage.innerHTML).toBe('Sorry, we only provide loans in the range of one thousand dollars to twenty million dollars')
  })

  it('should not trigger the error message when input is valid', async () => {
    const { getByLabelText, queryByRole } = render(LoanAmount)
    const loanAmountInput = getByLabelText('How much loan are you looking at?')
    await fireEvent.update(loanAmountInput, 20000)
    const errorMessage = queryByRole('alert')
    expect(errorMessage).not.toBeInTheDocument()
  })
})
