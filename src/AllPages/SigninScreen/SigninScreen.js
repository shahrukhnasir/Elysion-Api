import React, { useState } from "react";
import styles from "../SigninScreen/SigninScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import TopLayout from "../../components/TopLayout/TopLayout";
import { useRouter } from "next/router";
import Shadow from "../../components/Shadow/Shadow";
import { LoginHandler } from "../../Service/AuthService";
import { useDispatch } from "react-redux";
import { removedAllCart } from "../../Redux/CartList/CartList";
import { toast } from "react-toastify";
// import { removedAllCart } from ".";
const SigninScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatFields, setChatFields] = useState({ email: "", password: "", device_id: "random$" });
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      toast.info('please accepte remember me.');
      return;
    }
    dispatch(removedAllCart())
    setLoading(true);
    if (
      chatFields.email.length === 0 ||
      chatFields.password.length === 0
    ) {
      setError(true);
      setLoading(false);
      return;
    }
    setError(false);
    setLoading(true);
    let data = new FormData();
    data.append("device_id", chatFields?.device_id);
    data.append("email", chatFields?.email);
    data.append("password", chatFields?.password);
    dispatch(LoginHandler(data, setLoading, setChatFields, router, dispatch));
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
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
   
  };
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Sign In"
          descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis eros, blandit sed mattis sit amet, porta sit amet orci. Maecenas sed tempor tellus. Donec tincidunt convallis accumsan. Curabitur congue luctus odio, et elementum ante accumsan eget. Phasellus mollis, mi sollicitudin tincidunt eleifend."
          image="/images/new/registe-now.webp"
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
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-5" id={styles.form_Section}>
              <div className="row pt-3">
                <h1 className={styles.FormHeading}>Sign In</h1>

                <p className={styles.FormDesc}>
                  Don't Have an Account?
                  <Link href="/register" className={styles.FormLink}>
                    Sign Up
                  </Link>
                </p>
                <div className="col-lg-12">
                  <input
                    type="email"
                    className={`${styles.inputField} form-control`}
                    placeholder="Email"
                    value={chatFields.email}
                    name="email"
                    onChange={handleChange}
                  />

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
                      placeholder="Password"
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
                  <div className="pb-2">
                    {error && chatFields.password.length <= 0 ? (
                      <span className={styles.warning}>
                        Password can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div class="col-6">
                  <div class="form-check">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      id="flexCheckDefault"
                    />
                    <label
                      class={`${styles.labelCheckBox} form-check-label`}
                      for="gridCheck"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div class="col-6 ">
                  <div className="float-end">
                    <Link href="/forgot " className={styles.forgatPawd}>
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
              {!loading ? (
                <CommanButton
                  onClick={HandleSubmit}
                  className={styles.FromBtn}
                  label="Sign In"
                />
              ) : (
                <CommanButton
                  onClick={HandleSubmit}
                  className={styles.FromBtn}
                  label="Signing..."
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninScreen;
