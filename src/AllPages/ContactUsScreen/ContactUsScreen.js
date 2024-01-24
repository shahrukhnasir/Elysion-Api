import React, { useEffect, useState, useRef } from "react";
import styles from "../ContactUsScreen/ContactUsScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { baseUrl } from "../../network/baseUrl";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { ContactContent } from "../../Service/HomePageService";
import { Skeleton } from "antd";
import { PostContactHandler } from "../../Service/contactService";

const ContactUsScreen = () => {
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
      chatFields.message.length === 0
    ) {
      setError(true);
      return;
    }
    // Phone validation
    if (
      !chatFields.number ||
      chatFields.number.length < 10 ||
      chatFields.number.length > 20
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title:
          (chatFields.number.length < 10 &&
            "Phone number must be between 10 to 20 digits") ||
          (chatFields.number.length > 20 && "Phone number is too long"),
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
    dispatch(PostContactHandler(data, setLoading, setChatFields,router));

  };


  const Team = [
    {
      imgPath: "./images/Team/card1.png",
      name: "Jess Jones",
    },
    {
      imgPath: "./images/Team/card2.png",
      name: "George Donald",
    },
    {
      imgPath: "./images/Team/card3.png",
      name: "John Doe",
    },
    {
      imgPath: "./images/Team/card4.png",
      name: "Emilia Clark",
    },
  ];

  // const navigateHandler = (e, id, urlPath) => {
  //   e.preventDefault();
  //   router.push({
  //     pathname: urlPath,
  //     query: { id: id },
  //   })
  // }
  const [contactHeading, setContactHeading] = useState([]);
  const [address, setAddress] = useState([]);
  const [contact, setContact] = useState([]);
  useEffect(() => {
    dispatch(
      ContactContent(setLoading, setContactHeading, setAddress, setContact)
    );
  }, []);
  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.AboutTopSection}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  <h1 className={styles.mainHeading}>
                    {!loading ? (
                      contactHeading?.name
                    ) : (
                      <Skeleton loading={loading} />
                    )}
                  </h1>

                  <p className={styles.AboutDesc}> We want to hear from you</p>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className={styles.DocSection}>
                  <div className={styles.form_Section}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          className={styles.inputField}
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
                          className={styles.inputField}
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

                    <div className="row py-3">
                      <div className="col-lg-6">
                        <input
                          className={styles.inputField}
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

                      <div className="col-lg-6">
                        <input
                          className={styles.inputField}
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
                      <span className={styles.warning}>
                        Message can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}

                    <div className="py-3">
                      {!loading ? (
                        <CommanButton
                          label={"Submit"}
                          onClick={handleEmailSend}
                        />
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
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5">
              <p className={styles.Desc}>
                {!loading ? contactHeading?.value : <Skeleton />}
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <span>
                    {" "}
                    <img
                      src="./images/locationIcon.png"
                      className={styles.soclIcon}
                      alt="img"
                    />
                  </span>
                  <span className={styles.textBlue}>
                    {" "}
                    {!loading ? address?.value : <Skeleton />}
                  </span>
                </div>

                <div className="col-lg-6">
                  <span>
                    {" "}
                    <IoMdCall className={styles.soclIcon} />
                  </span>
                  <span className={styles.textBlue}>
                    Please call us at the following number
                    <a href="tel:470-300-2259">
                      {!loading ? contact?.value : <Skeleton />}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>
        <div className={`${styles.mapContainer} container`}>
          <div className="text-center">
            <h1 className={styles.findUs}>Find Us</h1>
          </div>

          <div className={styles.google_map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.4669184428494!2d-84.65869113501329!3d33.954836506933404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f53e9b41e195d5%3A0xa21a8327a8fb27d8!2s3698%20Largent%20Way%2C%20Marietta%2C%20GA%2030064%2C%20USA!5e0!3m2!1sen!2s!4v1696409396862!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsScreen;
