import React, { useEffect, useState } from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../BookOnAappointment/BookOnAppointment.module.css";
import { useRouter } from "next/router";

const service = [
    {
        Title: "Internal and integrative medicine",

    },

    {
        Title: "Family Medicine",

    },
    {
        Title: "Functional Nutrition ",

    },

    {
        Title: "Lifestyle Management",

    },

    {
        Title: "Weight Loss Management",

    },

    {
        Title: "IV Hydration and Vitamin Therapy",

    },
];
const BookOnAappointment = () => {
    const router = useRouter();

    const HandleServiceProvider = (e) => {


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
                    

                    <div className="col-lg-8">
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
        </NewPatientLayout>
    )
}

export default BookOnAappointment;
