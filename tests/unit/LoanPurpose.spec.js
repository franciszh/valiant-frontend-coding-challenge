import { describe, beforeEach, afterEach, vi } from 'vitest'
import { render, waitFor, fireEvent } from '@testing-library/vue'
import LoanPurpose from '../../src/components/LoanPurpose.vue'
import * as networkUtils from '../../src/utils/network'

const mockLoanPurpose = [{ label: 'Day-to-day capital', value: 'general', annualRate: 0.1 }, { label: 'Vehicle or transport', value: 'vehicle', annualRate: 0.045 }, { label: 'Financing a property', value: 'property', annualRate: 0.029 }]

describe('LoanPurpose', () => {
  beforeEach(() => {
    vi.spyOn(networkUtils, 'getData').mockImplementation(() => Promise.resolve(mockLoanPurpose))
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should render the dropdown with correct label', () => {
    const { getByLabelText } = render(LoanPurpose)
    expect(getByLabelText('How would the loan be used?')).toBeInTheDocument()
  })

  it('should have the dropdown render the right options', async () => {
    const { getByLabelText, getByText } = render(LoanPurpose)
    const dropdown = getByLabelText('How would the loan be used?')
    await fireEvent.click(dropdown)
    await waitFor(() => expect(getByText('Day-to-day capital')).toBeInTheDocument())
    expect(getByText('Vehicle or transport')).toBeInTheDocument()
    expect(getByText('Financing a property')).toBeInTheDocument()
    expect(getByText('Please select one loan purpose')).toBeInTheDocument()
  })
})
