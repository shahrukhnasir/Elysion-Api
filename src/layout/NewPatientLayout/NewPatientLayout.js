import React, { useState } from "react";
// React Calender
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
//css
import styles from "../NewPatientLayout/NewPatientLayout.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import TopLayout from "../../components/TopLayout/TopLayout";
const NewPatientLayout = ({ children, heading }) => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());

  return (
    <>
      <section>

        <TopLayout
          Heading={heading}
          descriptions=" Sed ut perspiciatis unde omnis iste natus error sit
         voluptatem accusantium doloremque  laudantium, totam
         rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi  architecto beatae vitae dicta sunt explicabo. Nemo enim
         ipsam voluptatem quia  voluptas sit aspernatur aut
         odit aut fugit, sed quia consequuntur."
          image="../images/new/appointments.webp"
        />

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">{children}</div>
            <div className="col-lg-4">
              <span className={styles.selectDate}>Select Date</span>

              <div className="calendar-container">
                <Calendar onChange={setDate} value={date} selectRange={false} />
              </div>
              <div className="row" id={styles.availableTime}>
                <span className={styles.aTime}>Available Time</span>
                <div className="col p-0 my-1 mx-1">
                  <CommanButton label="9:30 AM" className={styles.btn} />
                </div>
                <div className="col p-0 my-1 mx-1">
                  <CommanButton label="10:30 AM" className={styles.btn} />
                </div>
                <div className="col p-0 my-1 mx-1">
                  <CommanButton label="1:30 AM" className={styles.btn} />
                </div>
              </div>
              <div className="row" id={styles.availableTime}>
                <div className="col p-0 my-1 mx-1">
                  <CommanButton label="2:30 AM" className={styles.btn} />
                </div>
                <div className="col p-0 my-1 mx-1">
                  <CommanButton label="6:30 AM" className={styles.btn} />
                </div>
                <div className="col p-0 my-1 mx-1">
                  <CommanButton label="8:30 AM" className={styles.btn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewPatientLayout;
