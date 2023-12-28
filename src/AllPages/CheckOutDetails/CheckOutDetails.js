import React, { useEffect, useState } from "react";
import styles from "../CheckOutDetails/CheckOutDetails.module.css";

import CommanButton from "../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCartListHandler,
  CheckOutHandler,
} from "../../Service/CartService";
const CheckOutDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartList, setAddCartList] = useState([]);
  const token = useSelector((state) => state?.authSlice?.authToken);
  const [checkOutField, setCheckOutFields] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
    bName: "",
    bLName: "",
    bEmail: "",
    bPhone: "",
    bAddress: "",
    bOaddress: "",
    cartNumber: "",
    expirDate: "",
    cvv: "",
    country: "",
    zip: "",
    city: "",
    state: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setCheckOutFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const HandleSubmit = (e) => {
    const stripe_Token = [
      "pk_test_51NGLfkGkpmR3H6bhJIi1KM0UENfGLz60ljwZgPXyETmJ2oKvnglKjduymjrr80E4WjE245p5g1DlnEIncmhmEK68009TIOvbF3",
    ];
    e.preventDefault();

    setError(false);
    setLoading(true);
    let data = new FormData();
    data.append("shipper_first_name", checkOutField?.fName);
    data.append("shipper_last_name", checkOutField?.lName);
    data.append("shipper_email", checkOutField?.email);
    data.append("shipper_phone", checkOutField?.phone);
    data.append("shipper_address", checkOutField?.address);
    data.append("shipper_country", checkOutField?.country);
    data.append("shipper_city", checkOutField?.address);
    data.append("shipper_state", checkOutField?.address);
    data.append("shipper_zip", checkOutField?.zip);
    data.append("billing_first_name", checkOutField?.bName);
    data.append("billing_last_name", checkOutField?.bLName);
    data.append("billing_email", checkOutField?.bEmail);
    data.append("billing_phone", checkOutField?.bPhone);
    data.append("billing_address", checkOutField?.bAddress);
    data.append("billing_country", checkOutField?.country);
    data.append("billing_city", checkOutField?.city);
    data.append("billing_state", checkOutField?.state);
    data.append("billing_zip", checkOutField?.zip);
    data.append("total_discount", "10%");
    data.append("total_amount", finalTotal);
    cartList?.map((i, cart) => {
      data.append(`cart[${cart?.id}]`, i.id);
    });
    stripe_Token.map((i, t) => {
      data.append(`stripe_Token[${t}]`, i.id);
    });
    dispatch(CheckOutHandler(token, data, setLoading));
    if (
      checkOutField.fName.length === 0 ||
      checkOutField.lName.length === 0 ||
      checkOutField.email.length === 0 ||
      checkOutField.phone.length === 0 ||
      checkOutField.bName.length === 0 ||
      checkOutField.bLName.length === 0 ||
      checkOutField.bEmail.length === 0 ||
      checkOutField.bPhone.length === 0 ||
      checkOutField.bAddress.length === 0 ||
      checkOutField.bOaddress.length === 0 ||
      checkOutField.cartNumber.length === 0 ||
      checkOutField.expirDate.length === 0 ||
      checkOutField.cvv.length === 0 ||
      checkOutField.country.length === 0 ||
      checkOutField.city.length === 0 ||
      checkOutField.state.length === 0 ||
      checkOutField.zip.length === 0
    ) {
      setError(true);
      return;
    }
  };

  useEffect(() => {
    dispatch(AddToCartListHandler(token, setAddCartList, setLoading));
  }, []);
  const totalQty = cartList.reduce((total, cart) => {
    const qtyTotal = cart?.qty?.length || 0;
    return total + qtyTotal;
  }, 0);

  const finalTotal = cartList.reduce((total, cart) => {
    const subTotal = cart?.sub_total || 0;
    return total + subTotal;
  }, 0);

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
                    value={checkOutField?.fName}
                    onChange={handleChange}
                    name="fName"
                  />
                  <div className="pb-2">
                    {error && checkOutField?.fName.length <= 0 ? (
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
                    value={checkOutField?.lName}
                    name="lName"
                    onChange={handleChange}
                  />

                  <div className="pb-2">
                    {error && checkOutField?.lName.length <= 0 ? (
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
                    value={checkOutField?.email}
                    name="email"
                    onChange={handleChange}
                  />

                  <div className="pb-2">
                    {error && checkOutField?.email.length <= 0 ? (
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
                    name="phone"
                    value={checkOutField?.phone}
                    onChange={handleChange}
                  />

                  <div className="pb-2">
                    {error && checkOutField?.phone.length <= 0 ? (
                      <span className={styles.warning}>
                        Phone can't be Empty!
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
                    placeholder="Country"
                    value={checkOutField?.country}
                    onChange={handleChange}
                    name="country"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.country.length <= 0 ? (
                      <span className={styles.warning}>
                        Address can't be Empty!
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
                    placeholder="City"
                    value={checkOutField?.city}
                    onChange={handleChange}
                    name="city"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.city.length <= 0 ? (
                      <span className={styles.warning}>
                        City can't be Empty!
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
                    placeholder="State"
                    value={checkOutField?.state}
                    onChange={handleChange}
                    name="state"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.state.length <= 0 ? (
                      <span className={styles.warning}>
                        State can't be Empty!
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
                    placeholder="Zip Code"
                    value={checkOutField?.zip}
                    onChange={handleChange}
                    name="zip"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.zip <= 0 ? (
                      <span className={styles.warning}>
                        Zip can't be Empty!
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
                  value={checkOutField?.address}
                  onChange={handleChange}
                  name="address"
                />

                <div className="pb-2">
                  {error && checkOutField?.address.length <= 0 ? (
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
                    value={checkOutField?.bName}
                    onChange={handleChange}
                    name="bName"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.bName.length <= 0 ? (
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
                    value={checkOutField?.bLName}
                    onChange={handleChange}
                    name="bLName"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.bLName.length <= 0 ? (
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
                    value={checkOutField?.bEmail}
                    onChange={handleChange}
                    name="bEmail"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.bEmail.length <= 0 ? (
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
                    value={checkOutField?.bPhone}
                    onChange={handleChange}
                    name="bPhone"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.bPhone.length <= 0 ? (
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
                  value={checkOutField?.bAddress}
                  onChange={handleChange}
                  name="bAddress"
                />

                <div className="pb-2">
                  {error && checkOutField?.bAddress.length <= 0 ? (
                    <span className={styles.warning}>
                      Address can't be Empty!
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* <div className="col-lg-12">
                <input
                  type="text"
                  className={`${styles.inputFieldAdres} form-control`}
                  placeholder="Address2"
                  name="bOaddress"
                  value={checkOutField?.bOaddress}
                  onChange={handleChange}
                />

                <span className={styles.optional}> (optional)</span>

                <div className="pb-2">
                  {error && checkOutField?.bOaddress.length <= 0 ? (
                    <span className={styles.warning}>
                      Address can't be Empty!
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div> */}
              {/* Add Shipping Details End */}

              {/* Heading */}
              {/* <div className="row py-3">
                <div className="col-lg-6">
                  <h1 className={styles.cartDetails}> Enter Card Details</h1>
                </div>

                <div className="col-lg-6">
                  <span className={styles.cartImage}>
                    <img
                      src="./images/visa.png"
                      className="img-fluid"
                      alt="img"
                    />
                  </span>
                </div>
              </div> */}

              {/* Enter Card Details */}

              {/* <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="" className={styles.labelInput}>
                    Card Number
                  </label>
                  <input
                    type="number"
                    className={`${styles.inputField} form-control`}
                    placeholder="Enter Card Number"
                    value={checkOutField?.cartNumber}
                    onChange={handleChange}
                    name="cartNumber"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.cartNumber.length <= 0 ? (
                      <span className={styles.warning}>
                        Cart Number can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div> */}

              {/* <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="" className={styles.labelInput}>
                    Expiry date
                  </label>
                  <input
                    type="text"
                    className={`${styles.inputField} form-control`}
                    placeholder="MM/YY"
                    value={checkOutField?.expirDate}
                    onChange={handleChange}
                    name="expirDate"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.expirDate.length <= 0 ? (
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
                    value={checkOutField?.cvv}
                    onChange={handleChange}
                    name="cvv"
                  />

                  <div className="pb-2">
                    {error && checkOutField?.cvv.length <= 0 ? (
                      <span className={styles.warning}>
                        CVV can't be Empty!
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div> */}
              {/* Enter Card Details */}

              <div className="py-3">
                <CommanButton
                  onClick={HandleSubmit}
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
                    <article className={styles.cardTitle}>Item Qty</article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>{totalQty} </article>
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
                    <h1 className={styles.cardLastPrice}>{finalTotal}</h1>
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
                <CommanButton onSubmit={HandleSubmit} label="Checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutDetails;
// if (
//   checkOutField.fName.length === 0 ||
//   checkOutField.lName.length === 0 ||
//   checkOutField.email.length === 0 ||
//   checkOutField.phone.length === 0 ||
//   checkOutField.bName.length === 0 ||
//   checkOutField.bLName.length === 0 ||
//   checkOutField.bEmail.length === 0 ||
//   checkOutField.bPhone.length === 0 ||
//   checkOutField.bAddress.length === 0 ||
//   checkOutField.bOaddress.length === 0 ||
//   checkOutField.cartNumber.length === 0 ||
//   checkOutField.expirDate.length === 0 ||
//   checkOutField.cvv.length === 0 ||
//   checkOutField.country.length === 0 ||
//   checkOutField.city.length === 0 ||
//   checkOutField.state.length === 0 ||
//   checkOutField.zip.length === 0
// ) {
//   setError(true);
//   return;
// }
