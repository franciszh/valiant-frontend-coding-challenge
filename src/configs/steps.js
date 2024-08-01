// the step name has to be exactly same as the component name
// you may choose the order of each steps and the result won't be impacted
export const stepsConfig = [
  { cmpName: 'LoanAmount', modelKey: 'loanAmount' },
  { cmpName: 'LoanPurpose', modelKey: 'annualRate' },
  { cmpName: 'RepaymentPeriod', modelKey: 'repaymentsByYear' },
  { cmpName: 'LoanTerm', modelKey: 'loanMonths' },
]
