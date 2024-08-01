import { describe, expect } from 'vitest'
import { render } from '@testing-library/vue'
import LoanResult from '../../src/components/LoanResult.vue'

describe('LoanResult', () => {
  it('should render instalment and total repayments as expected', () => {
    const { getByText } = render(LoanResult, { props: { instalment: 20, numOfInstalment: 10 } })
    expect(getByText('You are expected to repay $20 per instalment and $200 over the loan term in total')).toBeInTheDocument()
  })
})
