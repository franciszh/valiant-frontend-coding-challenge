import { describe, expect } from 'vitest'
import { render } from '@testing-library/vue'
import ProgressBar from '../../src/components/ProgressBar.vue'

describe('ProgressBar', () => {
  it('should display 0 progress correctly', () => {
    const { getByText } = render(ProgressBar, { props: { progress: 0 } })
    expect(getByText('0%')).toBeInTheDocument()
  })

  it('should display 100% progress correctly', () => {
    const { getByText } = render(ProgressBar, { props: { progress: 100 } })
    expect(getByText('100%')).toBeInTheDocument()
  })

  it('should display in-middle progress correctly', () => {
    const { getByText } = render(ProgressBar, { props: { progress: 75 } })
    expect(getByText('75%')).toBeInTheDocument()
  })
})
