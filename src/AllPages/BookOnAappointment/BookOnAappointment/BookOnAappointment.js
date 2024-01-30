import React, { useEffect, useState } from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../BookOnAappointment/BookOnAppointment.module.css";
import { useRouter } from "next/router";
import TopLayout from "../../../components/TopLayout/TopLayout";


const BookOnAappointment = () => {
    const router = useRouter();

    const HandleServiceProvider = (e) => {


        router.push({
            pathname: "/serviceprovider",
        });
    }


    const HandleFollowUp = (event) => {
        const selectedRoute = event.target.value;
        router.push({
            pathname: `/${selectedRoute}`,
            query: { page: selectedRoute }, 
        });
    };
    return (
        // <NewPatientLayout heading="Request Appoinment">
        <>
         <TopLayout
          Heading="Request Appoinment"
          descriptions=" Sed ut perspiciatis unde omnis iste natus error sit
         voluptatem accusantium doloremque  laudantium, totam
         rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi  architecto beatae vitae dicta sunt explicabo. Nemo enim
         ipsam voluptatem quia  voluptas sit aspernatur aut
         odit aut fugit, sed quia consequuntur."
          image="../images/new/appointments.webp"
        />
            <div className="container py-5">
                <div className="row justify-content-center">
                    

                    <div className="col-lg-4">
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
        {/* // </NewPatientLayout> */}
    </>
    )
}

export default BookOnAappointment;
