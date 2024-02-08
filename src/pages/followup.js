import React from 'react'
import FollowUp from '../AllPages/BookOnAappointment/FollowUp/FollowUp'
import withAuth from '../../WithAuth'

const followup =() => {
  return (
    <>
    
    <FollowUp/>
    </>
  )
}

export default withAuth(followup)