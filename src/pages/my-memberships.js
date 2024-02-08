import React from 'react'
import MyMemberships from '../AllPages/Profile/MyMemberships/MyMemberships'
import withAuth from '../../WithAuth'

const mymemberships =() => {
  return (
  <>
  <MyMemberships/>
  </>
  )
}

export default withAuth(mymemberships)