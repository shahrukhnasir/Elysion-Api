import React, { useState } from "react";
import styles from "../CreatNewPasswordScreen/CreateNewPasswordScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Shadow from "../../components/Shadow/Shadow";
import TopLayout from "../../components/TopLayout/TopLayout";
import { useDispatch } from "react-redux";
import {  OtpNewPasswordHandler } from "../../Service/AuthService";
import { useRouter } from "next/router";
const CreateNewPasswordScreen = () => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [chatFields, setChatFields] = useState({
    otp: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      chatFields.otp.length === 0 ||
      chatFields.password.length === 0 ||
      chatFields.confirmPassword.length === 0 ||
      chatFields.email.length === 0
    ) {
      setError(true);
      setLoading(false);
      return;
    }
    setError(false);
    setLoading(true);
    let data = new FormData();
    data.append("otp", chatFields?.otp);
    data.append("password", chatFields?.password);
    data.append("confirm_password", chatFields?.confirmPassword);
    data.append("email", chatFields?.email);
    dispatch(OtpNewPasswordHandler(data, setLoading, setChatFields, router));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setChatFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");

      return;
    }
    setPasswordType("password");
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
                      placeholder="O-T-P"
                      type="number"
                      onChange={handleChange}
                      value={chatFields.otp}
                      name="otp"
                      className={`${styles.inputField} form-control`}
                    />

                   
                  </div>
                  <div className="pb-2">
                      {error && chatFields.otp.length <= 0 ? (
                        <span className={styles.warning}>
                          OTP can't be Empty!
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                </div>

                <div className="col-lg-12">
                  <div className={styles.eyeIconContainer}>
                    <input
                      placeholder="Type Email"
                      type="email"
                      onChange={handleChange}
                      value={chatFields.email}
                      name="email"
                      className={`${styles.inputField} form-control`}
                    />

                   
                  </div>
                  <div className="pb-2">
                      {error && chatFields.email.length <= 0 ? (
                        <span className={styles.warning}>
                          Email can't be Empty!
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                </div>
                <div className="col-lg-12">
                  <div className={styles.eyeIconContainer}>
                    <input
                      placeholder="Create New Password"
                      type={passwordType}
                      onChange={handleChange}
                      value={chatFields.password}
                      name="password"
                      className={`${styles.inputField} form-control`}
                    />
                    
                    <span className={styles.eyeIcon} onClick={togglePassword}>
                      {passwordType === "password" ? <BsEyeSlash /> : <BsEye />}
                    </span>
                  </div>
                 
                </div>
                <div className="pb-2">
                      {error && chatFields.password.length <= 0 ? (
                        <span className={styles.warning}>
                          Password can't be Empty!
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                <div className="col-lg-12">
                  <div className={styles.eyeIconContainer}>
                    <input
                      placeholder="Confirm Password"
                      type={confirmPasswordType}
                      onChange={handleChange}
                      value={chatFields.confirmPassword}
                      name="confirmPassword"
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
                  <div className="pb-2">
                      {error && chatFields.confirmPassword.length <= 0 ? (
                        <span className={styles.warning}>
                          Confirm Password can't be Empty!
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                </div>
              </div>
              {!loading ? (
                <CommanButton
                  onClick={HandleSubmit}
                  className={styles.FromBtn}
                  label="Submit"
                />
              ) : (
                <CommanButton
                  onClick={HandleSubmit}
                  className={styles.FromBtn}
                  label="Submiting..."
                />
              )}
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewPasswordScreen;
