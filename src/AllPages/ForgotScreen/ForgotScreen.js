import React, { useState } from "react";
import styles from "../SigninScreen/SigninScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import TopLayout from "../../components/TopLayout/TopLayout";
import Shadow from "../../components/Shadow/Shadow";
const ForgotScreen = () => {
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
                  />
                </div>
              </div>

              <Link href="/createnewpassword">
                <CommanButton className={styles.FromBtn} label="Submit" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotScreen;
