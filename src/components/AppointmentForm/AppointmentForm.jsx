import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSubscriptionCreate } from "../../Service/Subscription";
import { useRouter } from "next/router";
import CommanButton from "../CommanButton/CommanButton";
import styles from "./AppointmentForm.module.css"
import { AddToCartListHandler, CheckOutHandler } from "../../Service/CartService";
import { GuestCartLists, GuestCheckOutHandler } from "../../Service/GuestService";
import { SlotCheckOutHandler } from "../../Service/ServiceProviders";

const AppointmentForm = ({ checkOutField }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // redux imports 
  const token = useSelector((state) => state?.authSlice?.authToken);
  const currentDate = useSelector((state) => state?.currentDate?.currentDate);
  const time = useSelector((state) => state?.appointment?.appointment?.from);
  const docId = useSelector((state) => state?.appointment?.appointment?.doc_id);
  const serviceId = useSelector((state) => state?.selectService?.selectService);

  const [cartList, setAddCartList] = useState([]);
  // Strip Elements
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [loading, setLoading] = useState(false);


  const finalTotal = cartList.reduce((total, cart) => {
    const subTotal = cart?.sub_total || 0;
    return total + subTotal;
  }, 0);
  // cartList


  // Card Appearance and options
  const cardElemOptions = {
    // amount : 23,
    style: {
      base: {
        color: "#052148",
        fontFamily: "Poppins, sans-serif",
      },
    },
  };

  // ************ Handle For Paid Challenge ************ //
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return <Spin />;
    }

    const cardElement = elements.getElement(CardElement);
    const payload = await stripe.createToken(cardElement);
    // console.log("check", payload);
    if (!cardElement) {
      console.error("Card element not found");
      return;
    }
    // Clear any previous errors
    setPaymentError(null);

    // Perform form validation here
    if (!cardElement._complete) {
      setPaymentError("Please Enter Correct Card Information.");
      return;
    }

    setLoading(true);

    try {
      let data = new FormData();
      // Redux get Data
      data.append("doc_id", docId);
      data.append("service_id", serviceId);
      data.append("date", currentDate);
      data.append("time", time);
      data.append("stripe_Token", payload?.token?.id);
      //input Fileds
      data.append("first_name", checkOutField?.fName);
      data.append("last_name", checkOutField?.lName);
      data.append("email", checkOutField?.email);
      data.append("phone", checkOutField?.phone);
      data.append("address", checkOutField?.address);
      data.append("city", checkOutField?.city);
      data.append("zip_code", checkOutField?.zipCode);

      dispatch(SlotCheckOutHandler(token, data, setLoading, router));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Move CardElement inside the Elements component */}
      <CardElement options={cardElemOptions} className="card-elem" />
      {paymentError && (
        <div style={{ color: "red" }}>{paymentError}</div>
      )}
      {!loading ? (
        <CommanButton
          type="submit"
          disabled={!stripe}
          style={{ marginTop: "1rem" }}
          label=" Pay Now"
          className={styles.payNow}
        />
      ) :
        (
          <button className={styles.payNow} type="button">
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Sending...
          </button>
        )}



    </form>
  )
}

export default AppointmentForm