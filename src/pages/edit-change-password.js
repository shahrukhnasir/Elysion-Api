import React from 'react'
import EditChangePasswordScreen from '../AllPages/Profile/EditChangePasswordScreen/EditChangePasswordScreen'
import withAuth from '../../WithAuth'



const changepassword = () => {
    return (
        <> <EditChangePasswordScreen /></>
    )
}

export default withAuth(changepassword)