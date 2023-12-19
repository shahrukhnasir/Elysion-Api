import React, { useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../ChangePasswordScreen/ChangePassword.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from 'next/router';
import { BsEye, BsEyeSlash } from "react-icons/bs";
const ChangePasswordScreen = () => {

  const router = useRouter()
  const [error, setError] = useState(false);
  const [confirmPasswordInput, setCofirmPasswordInput] = useState("");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const handleConfirmPasswordChange = (evnt) => {
    setCofirmPasswordInput(evnt.target.value);
  };

  const toggleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };
  const HandleSubmit = (e) => {
    // e.preventDefault();
    // if (
    //   confirmPasswordInput.length === 0
    // ) {
    //   setError(true);

    //   return;
    // }

    router.push({
      pathname: "/edit-change-password",
      // query: { name: 'Someone' }
    });
  };
  return (
    <ProfileLayout Heading="Change Password" pageName="Change Password">
      <>
        <div className={styles.ProfileContainer}>
          <div className="container">
            <div className="mb-3">
              <div className="row g-0">
                <div className="col-lg-1">
                  <img
                    src="./images/profileMan.png"
                    className="img-fluid rounded-start"
                    alt="image"
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
            <label htmlFor="" className={styles.Label}> Change Password</label>
                  <div className={styles.eyeIconContainer}>
                   
                    <input
                      placeholder="......"
                      type={confirmPasswordType}
                      onChange={handleConfirmPasswordChange}
                      value={confirmPasswordInput}
                      name="password"
                      disabled
                      className={`${styles.inputField} form-control`}
                    />
                    <span
                      className={styles.eyeIcon}
                      onClick={toggleConfirmPassword}
                    >
                      {confirmPasswordType === "password" ? (
                        <BsEyeSlash />
                      ) : (
                        <BsEye />
                      )}
                    </span>
                  </div>

                  {error && confirmPasswordInput.length <= 0 ? (
                    <p className={styles.warning}>
                      Password can't be Empty!
                    </p>
                  ) : (
                    ""
                  )}
                </div>
          
        
            

              <div className="col-lg-12">
                <CommanButton onClick={HandleSubmit} label="Edit" />
              </div>
            </div>
          </div>
        </div>
      </>
    </ProfileLayout>
  );
};

export default ChangePasswordScreen;
