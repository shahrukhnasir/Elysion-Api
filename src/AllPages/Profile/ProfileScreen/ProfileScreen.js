import React, { useEffect, useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../ProfileScreen/ProfileScreen.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useDispatch, useSelector } from "react-redux";
import { MyProfileImageUpload, Profile } from "../../../Service/PatientPortal";
import Link from "next/link";
import { Skeleton } from "antd";
import withAuth from "../../../pages/utils/withAuth";
const ProfileScreen = () => {
  const dispatch = useDispatch();
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
  return (
    <ProfileLayout Heading="My Profile" pageName="User Profile">
      <>
        <div className={styles.ProfileContainer}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                 
                  First Name
                </label>

                <p className={styles.mainText}>
                  {!loading ? myProfile?.first_name : <Skeleton />}
                </p>
              </div>
              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  {" "}
                  Last Name
                </label>
                <p className={styles.mainText}>
                  {" "}
                  {!loading ? myProfile?.last_name : <Skeleton />}
                </p>
              </div>
              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  Email
                </label>
                <p className={styles.mainText}>
                  {!loading ? myProfile?.email : <Skeleton />}
                </p>
              </div>
              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  Phone
                </label>
                <p className={styles.mainText}>
                  {!loading ? myProfile?.mobile : <Skeleton />}
                </p>
              </div>

              <div className="col-lg-12 pt-5">
                <Link href="/edit-profile">
                  <CommanButton label="Edit" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </ProfileLayout>
  );
};

export default withAuth(ProfileScreen);
