import React from 'react'
import MyWishlist from '../AllPages/Profile/MyWishlist/MyWishlist'
import withAuth from '../../WithAuth'

const mywishlist = () => {
    return (
        <>

            <MyWishlist />
        </>
    )
}

export default withAuth(mywishlist)