import React from 'react'
import WaitingList from '../AllPages/Profile/WaitingList/WaitingList'
import withAuth from '../../WithAuth'
const AppointmentWaitinglist =()=> {
  return (
    <>
    
    <WaitingList/>
    </>
   
   


 
  )
}

export default withAuth(AppointmentWaitinglist)