import { describe, beforeEach, afterEach, vi } from 'vitest'
import { render, waitFor, fireEvent } from '@testing-library/vue'
import RepaymentPeriod from '../../src/components/RepaymentPeriod.vue'
import * as networkUtils from '../../src/utils/network'

const mockRepaymentPeriod = [{ label: 'Weekly', value: 52 }, { label: 'Fortnightly', value: 26 }, { label: 'Monthly', value: 12 }]

describe('RepaymentPeriod', () => {
  beforeEach(() => {
    vi.spyOn(networkUtils, 'getData').mockImplementation(() => Promise.resolve(mockRepaymentPeriod))
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should render the dropdown with correct label', () => {
    const { getByLabelText } = render(RepaymentPeriod)
    expect(getByLabelText('How frequent the loan will be paid?')).toBeInTheDocument()
  })

  it('should have the dropdown render the right options', async () => {
    const { getByLabelText, getByText } = render(RepaymentPeriod)
    const dropdown = getByLabelText('How frequent the loan will be paid?')
    await fireEvent.click(dropdown)
    await waitFor(() => expect(getByText('Weekly')).toBeInTheDocument())
    expect(getByText('Weekly')).toBeInTheDocument()
    expect(getByText('Fortnightly')).toBeInTheDocument()
    expect(getByText('Monthly')).toBeInTheDocument()
    expect(getByText('Please select one repayment period')).toBeInTheDocument()
  })
})
