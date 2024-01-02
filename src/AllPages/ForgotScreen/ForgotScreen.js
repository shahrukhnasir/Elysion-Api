import React, { useState } from "react";
import styles from "../SigninScreen/SigninScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import TopLayout from "../../components/TopLayout/TopLayout";
import Shadow from "../../components/Shadow/Shadow";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ForgotPasswordHandler } from "../../Service/AuthService";
const ForgotScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatFields, setChatFields] = useState({ email: ""});
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      chatFields.email.length === 0
    ) {
      setError(true);
      setLoading(false);
      return;
    }
    setError(false);
    setLoading(true);
    let data = new FormData();
    data.append("email", chatFields?.email);
    dispatch(ForgotPasswordHandler(data, setLoading, setChatFields,router));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setChatFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (

    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Forgot Password"
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

            <div className="col-lg-5 pe-lg-5">
              <div className="row pt-3">
                <h1 className={styles.FormHeading}>Forgot Password</h1>

                <p className={styles.FormDesc}>
                  Enter Email. you will receive a link via email
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
              </div>

              {/* <Link href="/createnewpassword"> */}
                <CommanButton className={styles.FromBtn} onClick={HandleSubmit} label="Submit" />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotScreen;
