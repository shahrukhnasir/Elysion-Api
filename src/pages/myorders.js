import React from 'react'
import MyOrdersScreen from '../AllPages/Profile/MyOrders/MyOrdersScreen'
import withAuth from '../../WithAuth'

const myorders =() => {
  return (
    <>
    
    <MyOrdersScreen/>
    </>
  )
}

export default withAuth(myorders)