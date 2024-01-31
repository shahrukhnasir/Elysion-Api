import React, { Children, useEffect, useState } from "react";
import styles from "../../layout/ProfileDashboard/ProfileLayout.module.css";
import ProfileTopHeader from "../../components/ProfileTopHeader/ProfileTopHeader";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsCalendar2Check, BsPerson } from "react-icons/bs";
import { RiFileList3Line, RiMoneyDollarBoxLine } from "react-icons/ri";
import { SlLock } from "react-icons/sl";
import { TbBox, TbCrown } from "react-icons/tb";
import { TfiHeart } from "react-icons/tfi";
import { ImSwitch } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/authSlice";
import { MyProfileImageUpload, Profile } from "../../Service/PatientPortal";
import { Skeleton } from "antd";
const Menu = [
  {
    icon: <BsPerson />,
    label: "My Profile",
    route: "/profile",
  },
  {
    icon: <SlLock />,
    label: "Change Password",
    route: "/edit-change-password",
  },
  {
    icon: <BsCalendar2Check />,
    label: "My Appointments",
    route: "/appointments",
  },
  // {
  //   icon: <RiFileList3Line />,
  //   label: "Appointment Waiting List",
  //   route: "/appointment-waiting-list",
  // },
  {
    icon: <TbBox />,
    label: "My Orders",
    route: "/myorders",
  },
  {
    icon: <TbCrown />,
    label: "My Memberships",
    route: "/my-memberships",
  },
  {
    icon: <TfiHeart />,
    label: "My Wishlist",
    route: "/my-wishlist",
  },
  {
    icon: <RiMoneyDollarBoxLine />,
    label: "Payment & Transactions",
    route: "/payment-transactions",
  },
  // {
  //     icon: <ImSwitch className={styles.logOut} />, label: "Logout", route: '/logout'
  // },
];
const ProfileLayout = ({ children, Heading, pageName }) => {
  
  const dispatch = useDispatch();
  const location = useRouter().pathname;
  const router = useRouter();
  const token = useSelector((state) => state?.authSlice?.authToken);
  const [myProfile, setMyProfile] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(Profile(token, setLoading, setMyProfile));
  }, [token,file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const profileUpload = () => {
    const data = new FormData();
    data.append("profile_pic", file);
    dispatch(MyProfileImageUpload(data, token, setLoading));
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    if (token) {
      dispatch(logout());
      router.push("/signin");
    }
  };
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
                <Link href="/profile">
                  <IoMdHome className={styles.pageIcon} />
                </Link>
                <span className={styles.pageName}>/{pageName}</span>
              </div>
              <div className={styles.SideBarMenu}>
                {Menu.map((menu,i) => {
                  return (
                    <div
                      id={styles.LinkBar}
                      key={i}
                      className={location == menu.route ? styles.active : ""}
                    >
                      <Link href={menu.route}>
                        <span className={styles.menuIcon}>{menu.icon}</span>
                        <span>{menu.label}</span>
                      </Link>
                    </div>
                  );
                })}
                <hr />
                <div id={styles.LinkBarLogout}>
                  <Link href="/signin">
                    <span className={styles.menuIcon}>
                      <ImSwitch className={styles.logOut} />
                    </span>
                    <span onClick={handleLogOut}>Logout</span>
                  </Link>
                </div>
              </div>

              <div className={styles.SheduleBtn}>
                <Link
                  href="/book-on-appointment"
                  className={styles.SheduleLink}
                >
                  <span className={styles.SheduleText}>
                    {" "}
                    Schedule Appointment{" "}
                  </span>
                  <span>
                    <AiOutlineArrowRight className={styles.SheduleIcon} />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-lg-7">
              
            <div className="mb-3">
              <div className="row g-0">
                <div className="col-lg-1">
                  <img
                    src={
                      !loading ? (
                        myProfile?.profile_pic_url
                      ) : (
                        <Skeleton avatar />
                      )
                    }
                    className="img-fluid rounded-start"
                    alt="Profile"
                  />
                </div>
                <div className="col-lg-11">
                  <div className={styles.cardBody}>
                    <h5 className={styles.cardTitle}>
                      {!loading ? myProfile?.first_name : <Skeleton />}
                    </h5>
                    <label for="upload-photo" className={styles.cardText}>
                      Edit Display Image
                    </label>
                    <input
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      onClick={profileUpload}
                      id="upload-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
              {children}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
