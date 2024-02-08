import React from 'react'
import BookOnAappointment from '../AllPages/BookOnAappointment/BookOnAappointment/BookOnAappointment'
import withAuth from '../../WithAuth'

const bookOnAppointment = () => {
  return (
    <BookOnAappointment />
  )
}
export default withAuth(bookOnAppointment)