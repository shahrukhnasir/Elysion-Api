import React from 'react'
import CheckOut from '../AllPages/BookOnAappointment/CheckOut/CheckOut'
import withAuth from '../../WithAuth'

const checkOut = () => {
  return (
    <CheckOut/>
  )
}

export default withAuth(checkOut)