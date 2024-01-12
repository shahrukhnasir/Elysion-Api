import React, { useState, useEffect } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../ProfileScreen/ProfileScreen.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  MyProfileImageUpload,
  Profile,
  MyUpdateProfile,
} from "../../../Service/PatientPortal";
import { Skeleton } from "antd";
const EditProfileScreen = () => {
  const router = useRouter();
  const token = useSelector((state) => state?.authSlice?.authToken);
  const [error, setError] = useState(false);
  const [lname, setLname] = useState("");
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const [myProfile, setMyProfile] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(Profile(token, setLoading, setMyProfile));
  }, [token, file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const profileUpload = () => {
    const data = new FormData();
    data.append("profile_pic", file);
    dispatch(MyProfileImageUpload(data, token, setLoading));
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (lname.length === 0 || fname.length === 0 || phone.length === 0) {
      setError(true);
      return;
    }

    let data = new FormData();
    data.append("first_name", fname);
    data.append("last_name", lname);
    data.append("mobile", phone);
    dispatch(MyUpdateProfile(data, token, setLoading,router));
    // router.push({
    //   pathname: "/profile",
    // });
  };
  return (
    <ProfileLayout Heading="Edit My Profile" pageName="Edit User Profile">
      <>
        <div className={styles.ProfileContainer}>
          <div className="container">
          

            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  {" "}
                  First Name
                </label>
                <input
                  type="text"
                  placeholder={myProfile?.first_name}
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  className={`${styles.inputField} form-control`}
               
                />
                {error && fname.length <= 0 ? (
                  <span className={styles.warning}>
                    First Name can't be Empty!
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  {" "}
                  Last Name
                </label>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  className={`${styles.inputField} form-control`}
                  placeholder={myProfile?.last_name}
                />
                {error && lname.length <= 0 ? (
                  <div className={styles.warning}>
                    Last Name can't be Empty!
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  Phone
                </label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className={`${styles.inputField} form-control`}
                  placeholder={myProfile?.mobile}
                />
                {error && phone.length <= 0 ? (
                  <div className={styles.warning}>Phone can't be Empty!</div>
                ) : (
                  ""
                )}
              </div>

              <div className="col-lg-12">
                <CommanButton label="Save" onClick={HandleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </>
    </ProfileLayout>
  );
};

export default EditProfileScreen;
