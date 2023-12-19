import React, { Children, useState } from 'react'
import styles from '../../layout/ProfileDashboard/ProfileLayout.module.css';
import ProfileTopHeader from '../../components/ProfileTopHeader/ProfileTopHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsCalendar2Check, BsPerson } from 'react-icons/bs';
import { RiFileList3Line, RiMoneyDollarBoxLine } from 'react-icons/ri'
import { SlLock } from 'react-icons/sl'
import { TbBox, TbCrown } from 'react-icons/tb'
import { TfiHeart } from 'react-icons/tfi'
import { ImSwitch } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Menu = [
    {
        icon: <BsPerson />, label: "My Profile", route: '/profile'
    },
    {
        icon: <SlLock />, label: "Change Password", route: '/change-password'
    },
    {
        icon: <BsCalendar2Check />, label: "My Appointments", route: '/appointments'
    },
    {
        icon: <RiFileList3Line />, label: "Appointment Waiting List", route: '/appointment-waiting-list'
    },
    {
        icon: <TbBox />, label: "My Orders", route: '/myorders'
    },
    {
        icon: <TbCrown />, label: "My Memberships", route: '/my-memberships'
    },
    {
        icon: <TfiHeart />, label: "My Wishlist", route: '/my-wishlist'
    },
    {
        icon: <RiMoneyDollarBoxLine />, label: "Payment & Transactions", route: '/payment-transactions'
    },
    // {
    //     icon: <ImSwitch className={styles.logOut} />, label: "Logout", route: '/logout'
    // },
]
const ProfileLayout = ({ children, Heading, pageName }) => {
    const location = useRouter().pathname

    return (
        <>
            <div className="container-fluid p-0">
                <div className={styles.ProfileTopSection}>
                    <div className={styles.Title}>
                        <h2>{Heading}</h2>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className={`${styles.innerContent} container py-5`}>
                    <div className="row">
                        <div className="col-lg-3" id={styles.sidebar}>
                            <div className={styles.pageAdress}>
                                <Link href="/profile"><IoMdHome className={styles.pageIcon} /></Link>
                                <span className={styles.pageName}>/{pageName}</span>
                            </div>
                            <div className={styles.SideBarMenu}>

                                {
                                    Menu.map(menu => {
                                        return (
                                            <div id={styles.LinkBar} className={location == menu.route ? styles.active : ''}>
                                                <Link href={menu.route} >

                                                    <span className={styles.menuIcon}>{menu.icon}</span>
                                                    <span>{menu.label}</span>
                                                </Link>
                                            </div>
                                        )

                                    })
                                }
                                <hr />
                                <div id={styles.LinkBarLogout}>


                                    <Link href="/signin" >

                                        <span className={styles.menuIcon}><ImSwitch className={styles.logOut} /></span>
                                        <span>Logout</span>
                                    </Link>
                                </div>

                            </div>

                            <div className={styles.SheduleBtn}>

                                <Link href="/book-on-appointment" className={styles.SheduleLink}>
                                    <span className={styles.SheduleText}> Schedule Appointment </span>
                                    <span><AiOutlineArrowRight className={styles.SheduleIcon} /></span>
                                </Link>
                            </div>

                        </div>


                        <div className="col-lg-7">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileLayout