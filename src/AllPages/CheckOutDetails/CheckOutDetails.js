import React, { useState } from "react";
import styles from "../CheckOutDetails/CheckOutDetails.module.css";

import CommanButton from "../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
const CheckOutDetails = () => {
  const [error, setError] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [bName, setBName] = useState("");
  const [bLName, setBlname] = useState("");
  const [bEmail, setBemail] = useState("");
  const [bPhone, setBphone] = useState("");
  const [bAddress, setBaddress] = useState("");
  const [bOaddress, setBoAddress] = useState("");

  const [cartNumber, setcartNumber] = useState("");
  const [expirDate, setExpirDate] = useState("");
  const [cvv, setCvv] = useState("");

  const router = useRouter();
  const HandleSubmit = (e, id, urlPath) => {
    e.preventDefault();
    if (email.length === 0) {
      setError(true);

      return;
    }
    router.push({
      pathname: urlPath,
      query: { id: id },
    });
  };
  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={styles.Title}>
            <h2>Checkout</h2>
          </div>
        </div>

        <div className="container py-5">
          <div className={`${styles.rowReverse} row`}>
            <div className="col-lg-5 offset-lg-1">
              {/* Heading */}
              <div className="row py-3">
                <div className="col-lg-6">
                  <h1 className={styles.cartHeading}> Billing Details</h1>
                </div>

                <div className="col-lg-6">
                  <div className="form-check float-end">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className={styles.checkLabel} for="flexCheckDefault">
                      Don't have an Account{" "}
                      <Link href="/signin" className={styles.signIn}>
                        Sign In
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              {/* Billing Details */}
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className={`${styles.inputField} form-control`}
                    placeholder="First Name"
                    value={fName}
                    onChange={(e) => {
                      setfName(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && fName.length <= 0 ? (
                      <span className={styles.warning}>
                        First Name can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <input
                    type="text"
                    className={`${styles.inputField} form-control`}
                    placeholder="Last Name"
                    value={lName}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && lName.length <= 0 ? (
                      <span className={styles.warning}>
                        Last Name can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="email"
                    className={`${styles.inputField} form-control`}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && email.length <= 0 ? (
                      <span className={styles.warning}>
                        Email can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <input
                    type="number"
                    className={`${styles.inputField} form-control`}
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && phone.length <= 0 ? (
                      <span className={styles.warning}>
                        Phone can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <input
                  type="text"
                  className={`${styles.inputField} form-control`}
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />

                <div className="pb-2">
                  {error && address.length <= 0 ? (
                    <span className={styles.warning}>
                      Address can't be Empty!
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* Heading */}
              <div className="row py-3">
                <div className="col-lg-6">
                  <h1 className={styles.cartHeading}> Add Shipping Details</h1>
                </div>

                <div className="col-lg-6">
                  <div className="form-check float-end">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className={styles.checkLabel} for="flexCheckDefault">
                      Same as Billing Details
                    </label>
                  </div>
                </div>
              </div>

              {/* Add Shipping Details */}
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className={`${styles.inputField} form-control`}
                    placeholder="First Name"
                    value={bName}
                    onChange={(e) => {
                      setBName(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && bName.length <= 0 ? (
                      <span className={styles.warning}>
                        First Name can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <input
                    type="text"
                    className={`${styles.inputField} form-control`}
                    placeholder="Last Name"
                    value={bLName}
                    onChange={(e) => {
                      setBlname(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && bLName.length <= 0 ? (
                      <span className={styles.warning}>
                        Last Name can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="email"
                    className={`${styles.inputField} form-control`}
                    placeholder="Email"
                    value={bEmail}
                    onChange={(e) => {
                      setBemail(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && bEmail.length <= 0 ? (
                      <span className={styles.warning}>
                        Email can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <input
                    type="number"
                    className={`${styles.inputField} form-control`}
                    placeholder="Phone"
                    value={bPhone}
                    onChange={(e) => {
                      setBphone(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && bPhone.length <= 0 ? (
                      <span className={styles.warning}>
                        Phone can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <input
                  type="text"
                  className={`${styles.inputField} form-control`}
                  placeholder="Address"
                  value={bAddress}
                  onChange={(e) => {
                    setBaddress(e.target.value);
                  }}
                />

                <div className="pb-2">
                  {error && bAddress.length <= 0 ? (
                    <span className={styles.warning}>
                      Address can't be Empty!
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="col-lg-12">
                <input
                  type="text"
                  className={`${styles.inputFieldAdres} form-control`}
                  placeholder="Address2"
                  value={bOaddress}
                  onChange={(e) => {
                    setBoAddress(e.target.value);
                  }}
                />

                <span className={styles.optional}> (optional)</span>

                <div className="pb-2">
                  {error && bOaddress.length <= 0 ? (
                    <span className={styles.warning}>
                      Address can't be Empty!
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* Add Shipping Details End */}

              {/* Heading */}
              <div className="row py-3">
                <div className="col-lg-6">
                  <h1 className={styles.cartDetails}> Enter Card Details</h1>
                </div>

                <div className="col-lg-6">
                  <span className={styles.cartImage}>
                    <img src="./images/visa.png" className="img-fluid" alt="img" />
                  </span>
                </div>
              </div>

              {/* Enter Card Details */}

              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="" className={styles.labelInput}>
                    Card Number
                  </label>
                  <input
                    type="number"
                    className={`${styles.inputField} form-control`}
                    placeholder="Enter Card Number"
                    value={cartNumber}
                    onChange={(e) => {
                      setcartNumber(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && cartNumber.length <= 0 ? (
                      <span className={styles.warning}>
                        Cart Number can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="" className={styles.labelInput}>
                    Expiry date
                  </label>
                  <input
                    type="text"
                    className={`${styles.inputField} form-control`}
                    placeholder="MM/YY"
                    value={expirDate}
                    onChange={(e) => {
                      setExpirDate(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && expirDate.length <= 0 ? (
                      <span className={styles.warning}>
                        Expiry Date can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <label htmlFor="" className={styles.labelInput}>
                    CVV
                  </label>
                  <input
                    type="number"
                    className={`${styles.inputField} form-control`}
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => {
                      setCvv(e.target.value);
                    }}
                  />

                  <div className="pb-2">
                    {error && cvv.length <= 0 ? (
                      <span className={styles.warning}>
                        CVV can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              {/* Enter Card Details */}

              <div className="py-3">
                <CommanButton
                  onClick={(e) => HandleSubmit(e, 3, "/thank-you")}
                  label="Add Card"
                  className={styles.cartButton}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.card}>
                <h1 className={styles.cardTopHeading}>Order Summary</h1>
                <div class="row g-0">
                  <div class="col-lg-2">
                    <img
                      src="./images/modalproduct.png"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-lg-10">
                    <span className={styles.pName}>Lorem ipsum dolor</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>Item Total</article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>$158.07 </article>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Promo Applied
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>$158.07 </article>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-lg-6">
                    <h1 className={styles.cardTextBlue}>Total</h1>
                  </div>

                  <div className="col-lg-6">
                    <h1 className={styles.cardLastPrice}>$170.0</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-lg-5">
          <hr />

          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <span>
                {" "}
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </span>
              <span className={styles.tCheckBoxText}>
                I hereby agree to the
                <Link href="/termservice">
                  <span className={styles.tCondition}>Terms & Conditions</span>
                </Link>
              </span>
            </div>
            <div className="col-lg-6">
              <div className={styles.checkOutLast}>
                <CommanButton
                  onClick={(e) => HandleSubmit(e, 3, "/thank-you")}
                  label="Checkout"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutDetails;
