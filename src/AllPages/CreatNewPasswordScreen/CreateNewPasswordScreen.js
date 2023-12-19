import React, { useState } from "react";
import styles from "../CreatNewPasswordScreen/CreateNewPasswordScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Shadow from "../../components/Shadow/Shadow";
import TopLayout from "../../components/TopLayout/TopLayout";
const CreateNewPasswordScreen = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setCofirmPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");

      return;
    }
    setPasswordType("password");
  };

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

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Create New Password"
          descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis eros, blandit sed mattis sit amet, porta sit amet orci. Maecenas sed tempor tellus. Donec tincidunt convallis accumsan. Curabitur congue luctus odio, et elementum ante accumsan eget. Phasellus mollis, mi sollicitudin tincidunt eleifend."
          image="./images/register-now.png"
        />
        <div className="container py-5">
          <div className={styles.setShaowRight}>
            <Shadow />
          </div>
          <div className="row py-5">
            <div className="col-lg-6 my-auto">
              <div className="">
                <img
                  src="./images/doc-tp.png"
                  className={styles.FormSectionImage}
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-5" id={styles.form_Section}>
              <div className="row pt-3">
                <h1 className={styles.FormHeading}>Create New Password</h1>

                <div className="col-lg-12">
                  <div className={styles.eyeIconContainer}>
                    <input
                      placeholder="Create New Password"
                      type={passwordType}
                      onChange={handlePasswordChange}
                      value={passwordInput}
                      name="password"
                      className={`${styles.inputField} form-control`}
                    />
                    <span className={styles.eyeIcon} onClick={togglePassword}>
                      {passwordType === "password" ? <BsEyeSlash /> : <BsEye />}
                    </span>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className={styles.eyeIconContainer}>
                    <input
                      placeholder="Confirm Password"
                      type={confirmPasswordType}
                      onChange={handleConfirmPasswordChange}
                      value={confirmPasswordInput}
                      name="password"
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
                </div>
              </div>

              <Link href="/signin">
                <CommanButton className={styles.FromBtn} label="Sign In" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewPasswordScreen;
