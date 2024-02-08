import React from 'react'
import ConfirmService from '../AllPages/BookOnAappointment/ConfirmService/ConfirmService'
import withAuth from '../../WithAuth'

const confirmservice =() =>{
  return (
    <>
    
    
    <ConfirmService/>
    </>
  )
}

export default withAuth(confirmservice)