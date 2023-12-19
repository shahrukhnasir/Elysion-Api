import React from "react";
import TopLayout2 from "../../../../components/TopLayout2/TopLayout2";
import Link from "next/link";
import CommanButton from "../../../../components/CommanButton/CommanButton";
import styles from "../PatientForm/PatientForm.module.css";
const PatientForm = () => {
    return (
        <>
            <TopLayout2
                Heading="PATIENT FORMS"
                Title=""
                descriptions="MEDICAL RECORDS"
                image="../images/patientform.webp"
            />

            <div className="container py-lg-5">
                <div className="py-3">

                    <h2 className={styles.subHeading}>Medical Records</h2>
                </div>
                <p className={styles.para}>
                    As a patient, you have the option to review your medical records through established procedures.  Our Health information Managment team is ready to assist you in obtaining a copy of your records.
                    To obtain further information, please contact our office at <b className={styles.bold}><a href="tel:+470-300-2259" target="_blank"> 470-300-2259</a></b> during the hours of Monday to Friday <b>8:00</b> am to <b>5:00</b> pm.
                </p>

                {/* <p className={styles.importText}>
                    To obtain further information, please contact our office at{" "}
                    <b className={styles.bold}><a href="https://wa.me/470-300-2259" target="_blank"> 470-300-2259</a></b> during the hours of Monday
                    to Friday, 8:30 AM to 6 PM.
                </p> */}

                <p className={styles.para}>
                    Portions of your medical record may be available to you through a secure, online service called Elysion Patient portal.  To sign up or learn more visit the  <Link href="/register" className={styles.bold}>
                        Patient Portal
                    </Link> section of our website or ask a patient representative at your next visit.


                </p>

              
            </div>
        </>
    );
};

export default PatientForm;
