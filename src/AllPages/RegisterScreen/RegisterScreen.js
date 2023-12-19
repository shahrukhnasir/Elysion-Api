import React, { useState } from "react";
import styles from "../RegisterScreen/RegisterScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import Shadow from "../../components/Shadow/Shadow";
import { useRouter } from 'next/router'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import TopLayout from "../../components/TopLayout/TopLayout";
import { SignUpHandler } from "../../Service/AuthService";
import { useDispatch } from "react-redux";
const RegisterScreen = () => {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [chatFields, setChatFields] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      chatFields.fname.length === 0 ||
      chatFields.lname.length === 0 ||
      chatFields.email.length === 0 ||
      chatFields.phone.length === 0 ||
      chatFields.password.length === 0 ||
      chatFields.confirmPassword === 0
    ) {
      setError(true);
      setLoading(false);
      return;
    }
    setError(false);
    setLoading(true );
    let data = new FormData();
    data.append("first_name", chatFields?.fname);
    data.append("last_name", chatFields?.lname);
    data.append("email", chatFields?.email);
    data.append("mobile", chatFields?.phone);
    data.append("password", chatFields?.password);
    data.append("confirm_password", chatFields?.confirmPassword);
    dispatch(SignUpHandler(data, setLoading, setChatFields,router));
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
          Heading="Patient Portal"
          descriptions="The Patient Portal offered by Elysion is a secure and convenient tool that grants you round-the-clock access to your personal health information. You can easily log in to the portal from any desktop, tablet, or mobile device with an internet connection, allowing you to stay connected to your health records from anywhere"
          image="./images/new/registe-now.webp"
        />
        <div className="container py-5">
          <div className="row">
            <div className={styles.setShaowRight}>
              <Shadow />
            </div>
            <div className="col-lg-6 my-auto">
              <div className="">
                <img
                  src="./images/doc-tp.png"
                  className={styles.FormSectionImage}
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-5 " id={styles.form_Section}>
              <div className="row pt-3">
                <h1 className={styles.FormHeading}>Register Now</h1>
                <p className={styles.FormDesc}>
                  Already Have an Account?
                  <Link href="/signin" className={styles.FormLink}>
                    Sign In
                  </Link>
                </p>
                <div className="col-lg-6">
                  <input
                    type="text"
                    value={chatFields.fname}
                    name="fname"
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="First Name"
                  />
                  {error && chatFields.fname.length <= 0 ? (
                    <span className={styles.warning}>
                      First Name can't be Empty!
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    value={chatFields.lname}
                    onChange={handleChange}
                    name="lname"
                    className={`${styles.inputField} form-control`}
                    placeholder="Last Name"
                  />
                  {error && chatFields.lname.length <= 0 ? (
                    <div className={styles.warning}>
                      Last Name can't be Empty!
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="email"
                    name="email"
                    value={chatFields.email}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Email"
                  />
                  {error && chatFields.email.length <= 0 ? (
                    <div className={styles.warning}>Email can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="number"
                    name="phone"
                    value={chatFields.phone}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Phone"
                  />
                  {error && chatFields.phone.length <= 0 ? (
                    <div className={styles.warning}>Phone can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <div className={styles.eyeIconContainer}>
                    <input
                      placeholder="Password"
                      onChange={handleChange}
                      type={passwordType}
                      value={chatFields.password}
                      name="password"
                      className={`${styles.inputPawsrd} form-control`}
                    />
                    <span className={styles.eyeIcon} onClick={togglePassword}>
                      {passwordType === "password" ? <BsEyeSlash /> : <BsEye />}
                    </span>
                  </div>
                  {error && chatFields.password.length <= 0 ? (
                    <p className={styles.warning}>Password can't be Empty!</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <div className={styles.eyeIconContainer}>
                    <input
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      type={confirmPasswordType}
                      value={chatFields?.confirmPassword}
                      name="confirmPassword"
                      className={`${styles.inputPawsrd} form-control`}
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

                  {error && chatFields?.confirmPassword.length <= 0 ? (
                    <p className={styles.warning}>
                      Confirm Password can't be Empty!
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div class="col-12 pb-5">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <span
                    class={`${styles.labelCheckBox} form-check-label`}
                    for="gridCheck"
                  >
                    I Accept the
                    <Link href="/termservice">
                      <span> Terms & Conditions</span>
                    </Link>
                  </span>
                </div>
                {!loading ? (
                  <CommanButton
                    onClick={HandleSubmit}
                    className={styles.FromBtn}
                    label="Sign Up"
                  />
                ) : (
                  <CommanButton
                    onClick={HandleSubmit}
                    className={styles.FromBtn}
                    label="Submiting..."
                  />
                )}

                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
