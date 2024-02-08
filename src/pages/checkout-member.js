import React from 'react'
import CheckOutDetails2 from '../AllPages/CheckOutDetails2/CheckOutDetails2'
import withAuth from '../../WithAuth'

const checkoutDetails = () => {
  return (
    <><CheckOutDetails2/>    </>
  )
}

export default withAuth(checkoutDetails)