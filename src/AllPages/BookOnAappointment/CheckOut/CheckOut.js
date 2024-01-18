import React, { useEffect, useState } from "react";
import styles from "../CheckOut/CheckOut.module.css";
import TopLayout from "../../../components/TopLayout/TopLayout";
import { useRouter } from "next/router";
import CommanButton from "../../../components/CommanButton/CommanButton";
import Link from "next/link";
import { SlotCheckOutHandler } from "../../../Service/ServiceProviders";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { getAllAServices } from "../../../Redux/AllService/allServices";
import { Subscriptions } from "../../../Service/Subscription";
import { getServicesById } from "../../../Redux/AllService/serviceById";
const CheckOut = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state?.authSlice?.authToken);
  const currentDate = useSelector((state) => state?.currentDate?.currentDate);
  const time = useSelector((state) => state?.appointment?.appointment?.from);
  const docId = useSelector((state) => state?.appointment?.appointment?.doc_id);
  const serviceId = useSelector((state) => state?.selectService?.selectService);
  const slug = useSelector((state) => state?.selectService?.selectService);
  const service = useSelector(
    (state) => state?.ServiceSlice?.featuredProducts
  );
  const [striptoken, setStriptoken] = useState();
  const [sub, setSubscription] = useState([]);

  const onToken = (token) => {
    setStriptoken(token?.id);

  };

  const [checkOutField, setCheckOutFields] = useState({
    fName: "",
    lName: "",
    address: "",
    email: "",
    phone: "",
    city: "",
    zipCode: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setCheckOutFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      if (striptoken) {
        let data = new FormData();
        // Redux get Data
        data.append("doc_id", docId);
        data.append("service_id", serviceId);
        data.append("date", currentDate);
        data.append("time", time);
        data.append("stripe_Token", striptoken);
        //input Fileds
        data.append("first_name", checkOutField?.fName);
        data.append("last_name", checkOutField?.lName);
        data.append("email", checkOutField?.email);
        data.append("phone", checkOutField?.phone);
        data.append("address", checkOutField?.address);
        data.append("city", checkOutField?.city);
        data.append("zip_code", checkOutField?.zipCode);

        dispatch(SlotCheckOutHandler(token, data, setLoading, router));
      }

      // Validate form fields
      if (
        checkOutField.fName.length === 0 ||
        checkOutField.lName.length === 0 ||
        checkOutField.email.length === 0 ||
        checkOutField.phone.length === 0 ||
        checkOutField.address.length === 0 ||
        checkOutField.city.length === 0 ||
        checkOutField.zipCode.length === 0
      ) {
        setError(true);
        return;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    dispatch(getServicesById(slug));
  }, []);
  useEffect(() => {
    dispatch(Subscriptions(token, setLoading, setSubscription));
  }, [token]);

  const calculatePrice = () => {
    if (service && sub) {
      const total = (service?.price || 0) - (sub?.discount || 0);
      return (total * 20) / 100;
    } else {
      const total = service?.price || 0;
      return (total * 20) / 100;
    }
  };
  // const calculatePrice = () => {
  //   if (service && sub) {
  //     const total = service?.price - sub?.discount;
  //     return (total * 100) / 20;
  //   } else {
  //     const total = service?.price;
  //     return (total * 100) / 20;
  //   }
  // };
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
                    value={checkOutField?.lName}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Last Name"
                    name="lName"
                  />
                  {error && checkOutField?.lName.length <= 0 ? (
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
                    value={checkOutField?.email}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Email"
                    name="email"
                  />
                  {error && checkOutField?.email.length <= 0 ? (
                    <div className={styles.warning}>Email can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-6">
                  <input
                    type="number"
                    value={checkOutField?.phone}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Phone"
                    name="phone"
                  />
                  {error && checkOutField?.phone.length <= 0 ? (
                    <div className={styles.warning}>Phone can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-lg-12">
                  <input
                    type="text"
                    value={checkOutField?.address}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Address"
                    name="address"
                  />
                  {error && checkOutField?.address.length <= 0 ? (
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
                    value={checkOutField?.city}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="City"
                    name="city"
                  />
                  {error && checkOutField?.city.length <= 0 ? (
                    <div className={styles.warning}>City can't be Empty!</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    value={checkOutField?.zipCode}
                    onChange={handleChange}
                    className={`${styles.inputField} form-control`}
                    placeholder="Zip Code"
                    name="zipCode"
                  />
                  {error && checkOutField?.zipCode.length <= 0 ? (
                    <div className={styles.warning}>
                      Zip Code can't be Empty!
                    </div>
                  ) : (
                    ""
                  )}
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
                    <article className={styles.cardDetail}>
                      ${service?.price}
                    </article>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Members Discount
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>
                      {sub?.discount}%
                    </article>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-lg-6">
                    <h1 className={styles.cardTextBlue}>Total</h1>
                  </div>

                  <div className="col-lg-6">
                    <h1 className={styles.cardLastPrice}>
                      ${calculatePrice()}
                    </h1>
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
                <div className="py-3">
                  {striptoken ? (
                    <CommanButton onClick={HandleSubmit} label="Checkout" />
                  ) : (
                    <StripeCheckout
                      token={onToken}
                      stripeKey="pk_test_51NGLfkGkpmR3H6bhJIi1KM0UENfGLz60ljwZgPXyETmJ2oKvnglKjduymjrr80E4WjE245p5g1DlnEIncmhmEK68009TIOvbF3"
                      amount={calculatePrice}
                      currency="USD"
                    >
                      <CommanButton
                        label="Send to"
                        onClick={HandleSubmit}
                        className={styles.cartButton}
                      />
                    </StripeCheckout>
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
export default CheckOut;
