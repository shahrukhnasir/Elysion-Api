import React from 'react'
import CheckOutDetails from '../AllPages/CheckOutDetails/CheckOutDetails'
import withAuth from '../../WithAuth'

const checkoutDetails = () => {
  return (
    <><CheckOutDetails/>    </>
  )
}

export default withAuth(checkoutDetails)