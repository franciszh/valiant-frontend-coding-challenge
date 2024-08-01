import { describe, expect } from 'vitest'
import { render } from '@testing-library/vue'
import LoanResult from '../../src/components/LoanResult.vue'

describe('LoanResult', () => {
  it('should render instalment and total repayments as expected', () => {
    const { getByText } = render(LoanResult, { props: { instalment: 20, numOfInstalment: 10 } })
    expect(getByText('$20 per instalment')).toBeInTheDocument()
    expect(getByText('$200 over the loan term')).toBeInTheDocument()
  })

  it('should localize the dollar amount correctly', () => {
    const { getByText } = render(LoanResult, { props: { instalment: 2000, numOfInstalment: 1000 } })
    expect(getByText('$2,000 per instalment')).toBeInTheDocument()
    expect(getByText('$2,000,000 over the loan term')).toBeInTheDocument()
  })
})
