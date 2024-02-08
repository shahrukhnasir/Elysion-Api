import React from 'react'
import PaymentTransactions from '../AllPages/Profile/PaymentTransactions/PaymentTransactions'
import withAuth from '../../WithAuth'

const paymentTransactions =()=> {
  return (
   <>
   
   <PaymentTransactions/>
   </>
  )
}

export default withAuth(paymentTransactions)