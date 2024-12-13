import React from 'react'
import usePaymentHistory from './../../Hooks/usePaymentHistory';

const PaymentHistory = () => {
  const { payments } = usePaymentHistory()
  console.log(payments)
  return (
    <div>

    </div>
  )
}

export default PaymentHistory