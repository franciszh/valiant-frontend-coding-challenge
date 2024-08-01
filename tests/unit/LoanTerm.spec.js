import { describe, beforeEach, afterEach, vi } from 'vitest'
import { render, waitFor, fireEvent } from '@testing-library/vue'
import LoanTerm from '../../src/components/LoanTerm.vue'
import * as networkUtils from '../../src/utils/network'

const mockLoanTerm = [{ label: '6 months', value: 6 }, { label: '12 months', value: 12 }, { label: '2 years', value: 24 }, { label: '3 years', value: 36 }]

describe('LoanTerm', () => {
  beforeEach(() => {
    vi.spyOn(networkUtils, 'getData').mockImplementation(() => Promise.resolve(mockLoanTerm))
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should render the dropdown with correct label', () => {
    const { getByLabelText } = render(LoanTerm)
    expect(getByLabelText('How long would the loan term be?')).toBeInTheDocument()
  })

  it('should have the dropdown render the right options', async () => {
    const { getByLabelText, getByText } = render(LoanTerm)
    const dropdown = getByLabelText('How long would the loan term be?')
    await fireEvent.click(dropdown)
    await waitFor(() => expect(getByText('6 months')).toBeInTheDocument())
    expect(getByText('12 months')).toBeInTheDocument()
    expect(getByText('2 years')).toBeInTheDocument()
    expect(getByText('3 years')).toBeInTheDocument()
    expect(getByText('Please select one loan term')).toBeInTheDocument()
  })
})
