import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import { IoMdCall } from "react-icons/io";
import { PostContactHandler } from "../../../Service/contactService";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const ContactUs = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [chatFields, setChatFields] = useState({
    name: "",
    lName: "",
    number: "",
    message: "",
    email: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setChatFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEmailSend = async (e) => {
    e.preventDefault();
    if (
      chatFields.name.length === 0 ||
      chatFields.lName.length === 0 ||
      chatFields.email.length === 0 ||
      chatFields.message.length === 0
    ) {
      setError(true);
      return;
    }
      // Phone validation
  if (!chatFields.number || chatFields.number.length < 10 || chatFields.number.length > 20) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: (chatFields.number.length < 10 && "Phone number must be between 10 to 20 digits") || (chatFields.number.length > 20 && "Phone number is too long"),
      showConfirmButton: false,
      timer: 1500,
    });
    setError(true);
    return;
  }
 // Email validation
  const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!chatFields.email || !emailValidationPattern.test(chatFields.email)) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Please provide a valid email address",
        showConfirmButton: false,
        timer: 1500,
    });
    setError(true);
    return;
}
    setError(false);
    setLoading(true);
    let data = new FormData();
    data.append("first_name", chatFields?.name);
    data.append("last_name", chatFields?.lName);
    data.append("phone", chatFields?.number);
    data.append("message", chatFields?.message);
    data.append("email", chatFields?.email);
    dispatch(PostContactHandler(data, setLoading, setChatFields));
    router.push("/thank-you");
  };

  return (
    <>
      <div className="container-fluid" id={styles.ContactContainer}>
        <div className="container">
          <div className="row">
            <div
              className="text-center mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className={styles.mainHeading}>Contact Us</h1>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className={styles.rightSection}>
                <h1 className={styles.subHeading}>Leave a Message</h1>

                <p
                  className={styles.desc}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  If you have any inquiries unrelated to health matters, please
                  reach out to Elysion using the form provided below. Please
                  note that this communication method should not be used for
                  urgent or confidential medical concerns. For inquiries
                  regarding your healthcare or to request your medical records,
                  we recommend visiting the patient portal or contacting your
                  physician's office.
                </p>
              </div>

              <div className="mb-2">
                <div className={styles.loc_sec}>
                  <div>
                    <span className="me-2">
                      <img
                        src="./images/locationIcon.png"
                        className={styles.icon}
                        alt="location-Icon"
                      />
                    </span>
                  </div>
                  <div>
                    <span
                      className={styles.points}
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      Kindly utilize the provided address to send correspondence
                      to the provider or practice of Elysion Health & Wellness:
                      Location 3698 Largent Way, Suite 102, Marietta GA 30064.
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.loc_sec}>
                <span className="me-2">
                  <IoMdCall />
                </span>
                <span
                  className={styles.points}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Please call us at the following number:{" "}
                  <a href="tel:4703002259">4703002259</a>
                </span>
              </div>
            </div>

            <div
              className="col-lg-6 p-5"
              id={styles.form}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="row">
                <div className="col-lg-6">
                  <input
                    class={`${styles.inputField} form-control`}
                    label="Name"
                    placeholder="Name"
                    type="text"
                    value={chatFields.name}
                    name="name"
                    onChange={handleChange}
                  />
                  {error && chatFields.name.length <= 0 ? (
                    <span className={styles.warning}>
                      This field is required
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <input
                    class={`${styles.inputField} form-control`}
                    label="lName"
                    placeholder="Last Name"
                    type="text"
                    value={chatFields.lName}
                    name="lName"
                    onChange={handleChange}
                  />
                  {error && chatFields.lName.length <= 0 ? (
                    <span className={styles.warning}>
                      This field is required
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="row py-3" id={styles.secoundRow}>
                <div className="col-lg-6">
                  <input
                    class={`${styles.inputField} form-control`}
                    label="number"
                    placeholder="Phone Number"
                    type="number"
                    value={chatFields.number}
                    name="number"
                    onChange={handleChange}
                  />
                  {error && chatFields.number.length <= 0 ? (
                    <span className={styles.warning}>
                      This field is required
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <input
                    class={`${styles.inputField} form-control`}
                    label="email"
                    placeholder="Email"
                    type="email"
                    value={chatFields.email}
                    name="email"
                    onChange={handleChange}
                  />
                  {error && chatFields.email.length <= 0 ? (
                    <span className={styles.warning}>
                      This field is required
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <textarea
                className={`${styles.textArea} form-control`}
                name="message"
                value={chatFields.message}
                onChange={handleChange}
                rows={3}
                placeholder="Describe your issue..."
              ></textarea>
              {error && chatFields.message.length <= 0 ? (
                <span className={styles.warning}>Message can't be Empty!</span>
              ) : (
                ""
              )}

              <div className="py-3">
                <div data-aos="fade-up">
                  {!loading ? (
                    <CommanButton label={"Submit"} onClick={handleEmailSend} />
                  ) : (
                    <button className={styles.GeneralButton} type="button">
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
