import React from 'react'
import NewPatient from '../AllPages/BookOnAappointment/New-patient/NewPatient'
import withAuth from '../../WithAuth'

const newpatient = () => {
  return (
   <NewPatient/>

  )
}

export default withAuth(newpatient)