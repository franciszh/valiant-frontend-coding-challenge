// Clone of the Microsoft Excel PMT function, see here for more information - https://support.microsoft.com/en-us/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441
/**
 * @param {*} rate Required. The interest rate for the loan.
 * @param {*} nper Required. The total number of payments for the loan.
 * @param {*} pv Required. The present value, or the total amount that a series of future payments is worth now; also known as the principal.
 * @param {*} fv Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param {*} type Optional. The number 0 (zero) or 1 and indicates when payments are due.
 * @returns Amount of each instalment
 */
function PMT (rate, nper, pv, fv = 0, type = 0) {
  const pvif = Math.pow(1 + rate, nper)
  return rate === 0
    ? -(fv + pv) / nper
    : -(rate * (fv + (pvif * pv))) /
      ((-1 + pvif) * (1 + rate * (type)))
}

export default PMT
