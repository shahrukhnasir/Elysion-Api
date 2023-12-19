import React from "react";
import styles from "../Front1/Front1.module.css";
import CommanButton from "../../CommanButton/CommanButton";
import MemberButton from "../../MemberButton/MemberButton";
const Front1 = () => {
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <h6 className={`${styles.carTitle}`}>Focused</h6>
            <hr />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> 250</span> /Mo
            </h6>

            <ul className={styles.pricingListOverFlow}>
              <li>Annual executive physical</li>
              <li>Tailored weight management</li>
              <li>
                Nutritional optimization for disease prevention and treatment
              </li>
              <li>Bioelectrical Impedance Analysis by InBody</li>
              <li>
                Scheduled office visits per individualized needs and health
                goals Telemedicine visits
              </li>
              <li>Access to direct text messaging with physician</li>
            </ul>

            <div className="">
              <MemberButton label="Join Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Front1;
