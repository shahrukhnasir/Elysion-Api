import React from 'react'

import ProfileScreen from '../AllPages/Profile/ProfileScreen/ProfileScreen'
import withAuth from '../../WithAuth'



const profile = () => {
    return (
        <> <ProfileScreen /></>
    )
}

export default withAuth(profile)