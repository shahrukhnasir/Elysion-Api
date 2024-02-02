import React, { useEffect, useState } from "react";
import styles from "../CheckOutDetails2/CheckOutDetails2.module.css";

import CommanButton from "../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {
  UserSubscription,
  UserSubscriptionCreate,
} from "../../Service/Subscription";
import { getProfile } from "../../Redux/Profile/Profile";
import { toast } from "react-toastify";
const CheckOutDetails2 = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedMem, setSelectedOption] = useState("");
  const [isValid, setIsValid] = useState(false);
  const token = useSelector((state) => state?.authSlice?.authToken);
  const userEmail = useSelector((state) => state?.ProfileSlice?.profile?.user?.email);
  const [striptoken, setStriptoken] = useState();
  // const [type, setType] = useState("Select");
  const [subDetails, setSubscriptionDetails] = useState([]);
  const onToken = (isToken) => {
    setStriptoken(isToken?.id);
  };
  
  const slug = router?.query?.id;
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      toast.info('please ✔ agree term and condition');
      return;
    }
    dispatch(getProfile(token));
    setIsValid(false);
    setLoading(true);
    try {
      if (striptoken) {
        let data = new FormData();
        data.append("type", subDetails?.type);
        data.append("subscription_id", slug);
        data.append("stripeToken", striptoken);
        dispatch(UserSubscriptionCreate(token, data, setLoading, router));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculatePrice = () => {
    if (selectedMem === "annually") {
      return subDetails?.price + 150;
    } else {
      return subDetails?.price * 1 + 150;
    }
  };
  useEffect(() => {
    dispatch(UserSubscription(slug, token, setLoading, setSubscriptionDetails));
  }, [slug, token]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  

 
   


  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={styles.Title}>
            <h2>Checkout</h2>
          </div>
        </div>

        <div className="container py-5 justify-content-center ">
          <div className={`${styles.rowReverse} row`}>
            <div className="col-lg-12">
              {/* Heading */}
              <div className="py-3">
                <h1 className={styles.cartHeading}>
                  You Select {subDetails?.type} Membership Plan{" "}
                  {subDetails?.name}
                </h1>
              </div>
            </div>

            <div className="">
              <div className={styles.card}>
                <h1 className={styles.cardTopHeading}>{subDetails?.name}</h1>

                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Membership Fee
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>
                      <span>${subDetails?.price}</span>
                    </article>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Membership Type
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>
                      {" "}
                      {subDetails?.type}
                    </article>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Administration charges
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>$150.0 </article>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-lg-6">
                    <h1 className={styles.cardTextBlue}>Total</h1>
                  </div>

                  <div className="col-lg-6">
                    <h1 className={styles.cardLastPrice}>
                      ${calculatePrice(selectedMem)}
                    </h1>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className={styles.alert}>
                <span className={styles.alertImage}>
                  <img src="./images/!.png" alt="img" />
                </span>
                <span className={styles.alertText}>
                  For Membership. There is no refund and cancellation policy
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 py-3 m-auto">
          <>
            {striptoken   ? (
              ""
            ) : (
              <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51NGLfkGkpmR3H6bhJIi1KM0UENfGLz60ljwZgPXyETmJ2oKvnglKjduymjrr80E4WjE245p5g1DlnEIncmhmEK68009TIOvbF3"
                currency="USD"
                amount={calculatePrice(selectedMem)}
                email={userEmail}
              >
                <CommanButton
                  label="BUY NOW"
                  onClick={HandleSubmit}
                  className={styles.cartButton}
                />
              </StripeCheckout>
            )}
          </>
        </div>

        <div className="container py-5">
          <hr />

          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <span>
               
              <input
          className="form-check-input me-2"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
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
                {!loading ? (
                  <>
                    {striptoken ? (
                      <CommanButton onClick={HandleSubmit} label="Checkout" />
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    <CommanButton label="Check..." />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutDetails2;
