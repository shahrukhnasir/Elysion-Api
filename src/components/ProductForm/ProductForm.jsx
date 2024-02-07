import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSubscriptionCreate } from "../../Service/Subscription";
import { useRouter } from "next/router";
import CommanButton from "../CommanButton/CommanButton";
import styles from "./ProductForm.module.css"
import { AddToCartListHandler, CheckOutHandler } from "../../Service/CartService";
import { GuestCartLists, GuestCheckOutHandler } from "../../Service/GuestService";

const ProductForm = ({ checkOutField }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    // redux imports 
    const token = useSelector((state) => state?.authSlice?.authToken);
    const session_id = useSelector((state) => state?.sessionSlice?.session);
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
    useEffect(() => {
        if (token) {
          dispatch(
            AddToCartListHandler(token,  setLoading,setAddCartList, dispatch)
          );
        } else if (!token) {
          dispatch(
            GuestCartLists(session_id,  setLoading,setAddCartList, dispatch)
          );
        }
      }, [token]);

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
                data.append("stripe_Token", payload?.token?.id);
        
                cartList?.map((i, cart) => {
                  data.append(`cart[${cart?.id}]`, i.id);
                });
                if (token) {
                  dispatch(CheckOutHandler(token, data, setLoading, router));
                } else if (!token) {
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
                  data.append("stripe_Token", payload?.token?.id);
                  data.append("session_id", session_id);
                  cartList?.map((i, cart) => {
                    data.append(`cart[${cart?.id}]`, i.id);
                  });
                  dispatch(GuestCheckOutHandler(data, setLoading, router));
                }
              
              // Validate form fields
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

export default ProductForm