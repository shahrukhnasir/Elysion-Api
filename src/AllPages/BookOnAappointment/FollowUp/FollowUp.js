import React from 'react'
import NewPatientLayout from '../../../layout/NewPatientLayout/NewPatientLayout'
import styles from '../FollowUp/FollowUp.module.css'
import CommanButton from '../../../components/CommanButton/CommanButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
const FollowUp = () => {
    const router = useRouter();
    const HandleServiceProvider = (e) => {
        console.log("clickecd")

        router.push({
            pathname: "/serviceprovider",
        });
    }
    const HandleFollowUp = (event) => {
        const selectedRoute = event.target.value;
        router.push(`/${selectedRoute}`);
    };
    return (
        <NewPatientLayout heading="Request Appoinment">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 p-0">
                        <label
                            for="inputState"
                            className={`${styles.Label} form-label`}
                        >
                            Provider
                        </label>
                        <select
                            id="inputState"
                            className={`${styles.selectField} form-select`}
                            onChange={HandleServiceProvider}
                        >
                            <option selected className={styles.optionField}>
                                Select Service Provider
                            </option>
                            <option className={styles.optionField}>
                                Dr Henry jerry
                            </option>
                            <option className={styles.optionField}>
                                Dr Hastie Lamyan
                            </option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label
                            for="inputState"
                            className={`${styles.Label} form-label`}
                        >
                            Reason For Visit
                        </label>
                        <select
                            id="inputState"
                            className={`${styles.selectField} form-select`}
                            onChange={HandleFollowUp}
                        >
                            <option selected className={styles.optionField}>
                                Reason For Visit
                            </option>
                            <option value={"/new-patient"} className={styles.optionField}>New-Patient</option>
                            <option value={"/followup"} className={styles.optionField}>Follow-Up</option>
                        </select>
                    </div>

                </div>
            </div>

            {/* Card */}



            <div className="container">
                <div className="row">
                    <div className="col-lg-12 offset-lg-1 p-0">
                        <h1 className={styles.cardTopHeading}>Last Visit Details</h1>
                        <div className={styles.card}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <article className={styles.cardTitle}>Service</article>
                                </div>

                                <div className="col-lg-6 p-0">
                                    <article className={styles.cardDetail}>Functional Nutrition</article>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <article className={styles.cardTitle}>Service Provider</article>
                                </div>

                                <div className="col-lg-6 p-0">
                                    <article className={styles.cardDetail}>Dr. Henry Jekyll</article>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <article className={styles.cardTitle}>Fees</article>
                                </div>

                                <div className="col-lg-6 p-0">
                                    <article className={styles.cardDetail}>$150.0</article>
                                </div>
                            </div>



                            <div className="">
                                <h1 className={styles.cardTextBlue}>Appointment Detail</h1>

                                <p className={styles.cardPara}>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua ut enim ad.</p>
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className={styles.cardTextBlue}>Total Amount</h1>
                                </div>


                                <div className="col-lg-6">
                                    <h1 className={styles.cardLastPrice}>$170.0</h1>
                                </div>
                            </div>
                        </div>
                        <div className="py-3" id={styles.nextBtn}>
                            <Link href="/confirmservice">
                                <CommanButton
                                    label="Next" />
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
            {/* Card */}
        </NewPatientLayout>
    )
}

export default FollowUp