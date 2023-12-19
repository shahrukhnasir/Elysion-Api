import React, { useState } from 'react'
import styles from '../CheckOutDetails2/CheckOutDetails2.module.css';

import CommanButton from '../../components/CommanButton/CommanButton';
import { useRouter } from 'next/router';
import Link from 'next/link';
const CheckOutDetails2 = () => {
    const [error, setError] = useState(false);
    const [fName, setfName] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

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
    }
    return (
        <>


            <div className="container-fluid p-0">
                <div className={styles.ProfileTopSection}>
                    <div className={styles.Title}>
                        <h2>Checkout
                        </h2>
                    </div>
                </div>

                <div className="container py-5">
                    <div className={`${styles.rowReverse} row`}>
                        <div className="col-lg-5 offset-lg-1">
                            {/* Heading */}
                            <div className='py-3'>
                                <h1 className={styles.cartHeading}> Enter Billing Information</h1>
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
                                        type="text"
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
                                        type="text"
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
                                                Last Name can't be Empty!
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


                            <div className="row">
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        className={`${styles.inputField} form-control`}
                                        placeholder="City"
                                        value={city}
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                    />

                                    <div className="pb-2">
                                        {error && city.length <= 0 ? (
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
                                        placeholder="Zip Code"
                                        value={zip}
                                        onChange={(e) => {
                                            setZip(e.target.value);
                                        }}
                                    />

                                    <div className="pb-2">
                                        {error && zip.length <= 0 ? (
                                            <span className={styles.warning}>
                                                Zip CodeLast Name can't be Empty!
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.plan}>

                                <span className={`${styles.month} form-check-label`} for="flexSwitchCheckChecked">Monthly</span>
                                <span className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                </span>
                                <span className={`${styles.annual} form-check-label`} for="flexSwitchCheckChecked">Annually</span>
                            </div>



                            {/* Heading */}
                            <div className="row py-3">
                                <div className="col-lg-6">
                                    <h1 className={styles.cartDetails}>  Enter Card Details</h1>
                                </div>

                                <div className="col-lg-6">
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
                            {/* Enter Card Details */}

                            <div className="py-3">
                                <CommanButton
                                    onClick={(e) => HandleSubmit(e, 5, "/thank-you")}
                                    label="Add Card"
                                    className={styles.cartButton}
                                />
                            </div>
                        </div>





                        <div className="col-lg-6">
                            <div className={styles.card}>

                                <h1 className={styles.cardTopHeading}>Premium</h1>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <article className={styles.cardTitle}>
                                            Membership Fee
                                        </article>
                                    </div>

                                    <div className="col-lg-6 p-0">
                                        <article className={styles.cardDetail}>$120.0</article>
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
                                        <h1 className={styles.cardLastPrice}>$270.0</h1>
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

                <div className="container py-5">
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
                                    onClick={(e) => HandleSubmit(e, 5, "/thank-you")}
                                    label="Checkout"
                                />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutDetails2