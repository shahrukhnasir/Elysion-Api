import React from 'react'
import MyAppointments from '../AllPages/Profile/MyAppointments/MyAppointments'
import withAuth from '../../WithAuth'

const appointments =() => {
  return (
    <>
    <MyAppointments/>
    </>
  )
}

export default withAuth(appointments)