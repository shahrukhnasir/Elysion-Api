import React, { useState } from "react";
import styles from "../FreeConsultationScreen/FreeConsultationScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import TopLayout from "../../components/TopLayout/TopLayout";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { FreeConsultation } from "../../Service/FreeConsultService";
const AboutusScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [chatFields, setChatFields] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    dob: "",
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
      chatFields.dob.length === 0
    ) {
      setError(true);
      setLoading(false);
      return;
    }
    setError(false);
    setLoading(true);
    let data = new FormData();
    data.append("first_name", chatFields?.fname);
    data.append("last_name", chatFields?.lname);
    data.append("email", chatFields?.email);
    data.append("phone", chatFields?.phone);
    data.append("dob", chatFields?.dob);
    dispatch(FreeConsultation(data, setLoading, setChatFields, router));
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
              </div>

              <div className="row py-lg-3">
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

                <div className="col-lg-12 pt-lg-3">
                <input
                    type="date"
                    name="dob"
                    value={chatFields.dob}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Date Of Birth"
                  />
                  {error && chatFields.phone.length <= 0 ? (
                    <div className={styles.warning}>DOB can't be Empty!</div>
                  ) : (
                    ""
                  )}
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
                {/* </Link> */}
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusScreen;
