import React, { useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../ProfileScreen/ProfileScreen.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from 'next/router';
const EditProfileScreen = () => {

  const router = useRouter()
  const [error, setError] = useState(false);
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [DoB, setDoB] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      lname.length === 0 ||
      email.length === 0 ||
      fname.length === 0 ||
      phone.length === 0 ||
      DoB.length === 0
    ) {
      setError(true);

      return;
    }

    router.push({
      pathname: "/profile",
      // query: { name: 'Someone' }
    });
  };
  return (
    <ProfileLayout Heading="Edit My Profile" pageName="Edit User Profile">
      <>
        <div className={styles.ProfileContainer}>
          <div className="container">
            <div className="mb-3">
              <div className="row g-0">
                <div className="col-lg-1">
                  <img
                    src="./images/profileMan.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-lg-11">
                  <div className={styles.cardBody}>
                    <h5 className={styles.cardTitle}>John Doe</h5>
                    <label for="upload-photo" className={styles.cardText}>Edit Display Image</label>
                    <input type="file" name="photo" id="upload-photo" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  {" "}
                  First Name
                </label>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  className={`${styles.inputField} form-control`}
                  placeholder="First Name"
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
                  placeholder="Last Name"
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
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`${styles.inputField} form-control`}
                  placeholder="Email"
                />
                {error && email.length <= 0 ? (
                  <div className={styles.warning}>Email can't be Empty!</div>
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
                  placeholder="Phone"
                />
                {error && phone.length <= 0 ? (
                  <div className={styles.warning}>Phone can't be Empty!</div>
                ) : (
                  ""
                )}
              </div>

              <div className="col-lg-6">
                <label htmlFor="" className={styles.Label}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={DoB}
                  onChange={(e) => {
                    setDoB(e.target.value);
                  }}
                  className={`${styles.inputField} form-control`}
                  placeholder="Date of Birth"
                />
                {error && DoB.length <= 0 ? (
                  <div className={styles.warning}>DOB can't be Empty!</div>
                ) : (
                  ""
                )}
              </div>

              <div className="col-lg-12">
                <CommanButton onClick={HandleSubmit} label="Save" />
              </div>
            </div>
          </div>
        </div>
      </>
    </ProfileLayout>
  );
};

export default EditProfileScreen;
