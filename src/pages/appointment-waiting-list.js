import React from 'react'
import WaitingList from '../AllPages/Profile/WaitingList/WaitingList'
import withAuth from '../components/withAuth'
const AppointmentWaitinglist =()=> {
  return (
    <>
    
    <WaitingList/>
    </>
   
   


 
  )
}

export default withAuth(AppointmentWaitinglist)