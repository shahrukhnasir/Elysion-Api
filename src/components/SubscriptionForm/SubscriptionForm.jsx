import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSubscriptionCreate } from "../../Service/Subscription";
import { useRouter } from "next/router";
import CommanButton from "../CommanButton/CommanButton";
import styles from "./subStyle.module.css"

const SubscriptionForm = ({ type, slug }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state?.authSlice?.authToken);
    const router = useRouter();
    // Strip Elements
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [loading, setLoading] = useState(false);


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
            data.append("type", type);
            data.append("subscription_id", slug);
            data.append("stripeToken", payload?.token?.id);
            dispatch(UserSubscriptionCreate(token, data, setLoading, router));
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
            <CommanButton
                type="submit"
                disabled={!stripe}
                style={{ marginTop: "1rem" }}
                label=" Pay Now"
                className={styles.payNow}
            />
               
            
        </form>
    )
}

export default SubscriptionForm