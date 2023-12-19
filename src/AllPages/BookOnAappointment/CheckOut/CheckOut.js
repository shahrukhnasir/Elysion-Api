import React, { useState } from "react";
import styles from "../CheckOut/CheckOut.module.css";
import TopLayout from "../../../components/TopLayout/TopLayout";
import { useRouter } from "next/router";
import CommanButton from "../../../components/CommanButton/CommanButton";
import Link from "next/link";
const CheckOut = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [cartNumber, setcartNumber] = useState("");
  const [expirDate, setExpirDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const HandleSubmit = (e,id,urlPath) => {
    e.preventDefault();
    if (
      lname.length === 0 ||
      email.length === 0 ||
      fname.length === 0 ||
      phone.length === 0
    ) {
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
      <TopLayout
        Heading="Checkout"
        descriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis eros, blandit sed mattis sit amet, porta sit amet orci. Maecenas sed tempor tellus. Donec tincidunt convallis accumsan. Curabitur congue luctus odio, et elementum ante accumsan eget. Phasellus mollis, mi sollicitudin tincidunt eleifend."
        image="/images/new/check-out.webp"
      />

      <div className="container-fluid">
        <div className="container">
          <div className={`${styles.rowReverse} row`}>
            <div className="col-lg-5 offset-lg-1 p-0">
              <h1 className={styles.mainHeading}>Enter Billing Information</h1>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    className={`${styles.inputField} form-control`}
                    placeholder="First Name"
                  />
                  {error && fname.length <= 0 ? (
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
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    className={`${styles.inputField} form-control`}
                    placeholder="Last Name"
                  />
                  {error && lname.length <= 0 ? (
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className={`${styles.inputField} form-control`}
                    placeholder="Email"
                  />
                  {error && email.length <= 0 ? (
                    <div className={styles.warning}>Email can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className={`${styles.inputField} form-control`}
                    placeholder="Phone"
                  />
                  {error && phone.length <= 0 ? (
                    <div className={styles.warning}>Phone can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-12">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className={`${styles.inputField} form-control`}
                    placeholder="Address"
                  />
                  {error && address.length <= 0 ? (
                    <div className={styles.warning}>
                      Address can't be Empty!
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    className={`${styles.inputField} form-control`}
                    placeholder="City"
                  />
                  {error && city.length <= 0 ? (
                    <div className={styles.warning}>City can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => {
                      setZip(e.target.value);
                    }}
                    className={`${styles.inputField} form-control`}
                    placeholder="Zip Code"
                  />
                  {error && zip.length <= 0 ? (
                    <div className={styles.warning}>
                      Zip Code can't be Empty!
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>


                {/* Heading */}
                <div className="row py-3">
                                <div className="col-lg-6">
                                    <h1 className={styles.cartHeading}>  Enter Card Details</h1>
                                </div>

                                <div className="col-lg-6 pt-3">
                                    <span className={styles.cartImage}><img src="./images/visa.png" className='img-fluid' alt="img" /></span>
                                </div>
                            </div>


                            {/* Enter Card Details */}


                            <div className="row">
                                <div className="col-lg-12">
                                    <label htmlFor="" className={styles.labelInput}>Card Number</label>
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
                                    <label htmlFor="" className={styles.labelInput}>Expiry date</label>
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
                                    <label htmlFor="" className={styles.labelInput}>CVV</label>
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
            </div>

            <div className="col-lg-6">
              <div className={styles.card}>
                <h1 className={styles.cardTopHeading}>Functional Nutrition</h1>
                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Appointment Fee
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>$150.0</article>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Members Discount
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>$12.00</article>
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

              <div className={styles.alert}>
                <span className={styles.alertImage}>
                  <img src="./images/!.png" alt="img" />
                </span>
                <span className={styles.alertText}>
                  On Cancellation 20% of the appointment cost will be charged.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <hr className="pb-2" />
          <div className="row pb-5">
            <div className="col-lg-5 offset-lg-1 p-0">
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
              <div className={styles.checkOutBtn}>
                <CommanButton
                  className={styles.checkOut}
                  onClick={(e) => HandleSubmit(e, 1, "/thankyou")}
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
export default CheckOut;
