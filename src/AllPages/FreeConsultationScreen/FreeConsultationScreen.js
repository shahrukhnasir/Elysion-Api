import React, { useState } from "react";
import styles from "../FreeConsultationScreen/FreeConsultationScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import TopLayout from "../../components/TopLayout/TopLayout";
import { useRouter } from "next/router";
const AboutusScreen = () => {

  const router = useRouter()
  const navigateHandler = (e, id, urlPath) => {
    e.preventDefault();
    router.push({
      pathname: urlPath,
      query: { id: id },
    })
  }
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Free Consultation"
          descriptions="Sed ut perspiciatis unde omnis iste natus error sit
voluptatem accusantium doloremque laudantium, totam
rem aperiam, eaque ipsa quae ab illo inventore veritatis et
quasi Sed ut perspiciatis unde omnis iste natus error sit
voluptatem accusantium doloremque laudantium, totam
rem aperiam, eaque ipsa quae ab illo inventore veritatis et
quasi"
          image="/images/new/packages.webp"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    class={`${styles.inputField} form-control`}
                    placeholder="First Name"
                  />
                </div>

                <div className="col-lg-6">
                  <input
                    type="text"
                    class={`${styles.inputField} form-control`}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="row py-lg-3">
                <div className="col-lg-6">
                  <input
                    type="email"
                    className={`${styles.inputField} form-control`}
                    placeholder="Email"
                  />
                </div>

                <div className="col-lg-6">
                  <input
                    type="number"
                    className={`${styles.inputField} form-control`}
                    placeholder="Phone"
                  />
                </div>

                <div className="col-lg-12 pt-lg-3">
                  <input
                    type="date"
                    className={`${styles.inputField} form-control`}
                    placeholder="Date of Birth"
                  />
                </div>
              </div>

              <div className="col-12 pt-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className={`${styles.labelCheckBox} form-check-label`}
                    for="gridCheck"
                  >
                    I have read and agreed to the Privacy Policy and Terms of
                    Use that I am at least 13 and have the authority to make
                    this appointment
                  </label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className={`${styles.labelCheckBox} form-check-label`}
                    for="gridCheck"
                  >
                    I agree to receiving text messages for feedback requests
                  </label>
                </div>
              </div>
              <div className="py-3">
                {/* <Link href="/thank-you"  > */}
                <CommanButton label={"Submit"}
                  onClick={(e) => navigateHandler(e, 1, "/thank-you")}
                />
                {/* </Link> */}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusScreen;
