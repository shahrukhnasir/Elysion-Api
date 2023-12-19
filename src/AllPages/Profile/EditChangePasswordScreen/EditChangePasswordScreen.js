import React, { useState } from "react";
import ProfileLayout from "../../../layout/ProfileDashboard/ProfileLayout";
import styles from "../EditChangePasswordScreen/EditChangePassword.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from 'next/router';
import { BsEye, BsEyeSlash } from "react-icons/bs";
const EditChangePasswordScreen = () => {

  const router = useRouter()
  const [error, setError] = useState(false);
  const [confirmPasswordInput, setCofirmPasswordInput] = useState("");
  const [confirmPasswordType, setConfirmPasswordType] = useState("confirmpassword");
  const handleConfirmPasswordChange = (evnt) => {
    setCofirmPasswordInput(evnt.target.value);
  };


  const [passwordInput, setPasswordInput] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };


  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [newPasswordType, setNewPasswordType] = useState("newpassword");
  const handleNewPasswordChange = (e) => {
    setNewPasswordInput(e.target.value);
  };
  const toggleNewPassword = () => {
    if (newPasswordType === "newpassword") {
      setNewPasswordType("text");
      return;
    }
    setNewPasswordType("newpassword");
  };


  const toggleConfirmPassword = () => {
    if (confirmPasswordType === "confirmpassword") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("confirmpassword");
  };



  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      confirmPasswordInput.length === 0
    ) {
      setError(true);

      return;
    }

    router.push({
      pathname: "/change-password",
      // query: { name: 'Someone' }
    });
  };
  return (
    <ProfileLayout Heading="Edit Change Password" pageName="Edit Change Password">
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
            <label htmlFor="" className={styles.Label}> Change Password</label>
                  <div className={styles.eyeIconContainer}>
                   
                    <input
                      placeholder="......"
                      type={passwordType}
                      onChange={handlePasswordChange}
                      value={passwordInput}
                      name="password"
                      className={`${styles.inputField} form-control`}
                    />
                    <span
                      className={styles.eyeIcon}
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <BsEyeSlash />
                      ) : (
                        <BsEye />
                      )}
                    </span>
                  </div>

                  {error && passwordInput.length <= 0 ? (
                    <p className={styles.warning}>
                      Password can't be Empty!
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
            <label htmlFor="" className={styles.Label}> New Password</label>
                  <div className={styles.eyeIconContainer}>
                   
                    <input
                      placeholder="......"
                      type={newPasswordType}
                      onChange={handleNewPasswordChange}
                      value={newPasswordInput}
                      name="newpassword"
                      className={`${styles.inputField} form-control`}
                    />
                    <span
                      className={styles.eyeIcon}
                      onClick={toggleNewPassword}
                    >
                      {newPasswordType === "newpassword" ? (
                        <BsEyeSlash />
                      ) : (
                        <BsEye />
                      )}
                    </span>
                  </div>

                  {error && newPasswordInput.length <= 0 ? (
                    <p className={styles.warning}>
                      New Password can't be Empty!
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
            <label htmlFor="" className={styles.Label}> Confirm Password</label>
                  <div className={styles.eyeIconContainer}>
                   
                    <input
                      placeholder="......"
                      type={confirmPasswordType}
                      onChange={handleConfirmPasswordChange}
                      value={confirmPasswordInput}
                      name="confirmpassword"
                      className={`${styles.inputField} form-control`}
                    />
                    <span
                      className={styles.eyeIcon}
                      onClick={toggleConfirmPassword}
                    >
                      {confirmPasswordType === "confirmpassword" ? (
                        <BsEyeSlash />
                      ) : (
                        <BsEye />
                      )}
                    </span>
                  </div>

                  {error && confirmPasswordInput.length <= 0 ? (
                    <p className={styles.warning}>
                      Confirm Password can't be Empty!
                    </p>
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

export default EditChangePasswordScreen;
