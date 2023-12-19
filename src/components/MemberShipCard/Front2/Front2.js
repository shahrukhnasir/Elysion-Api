import React from "react";
import styles from "../Front2/Front2.module.css";
import MemberButton from "../../MemberButton/MemberButton";
const Front2 = () => {
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
          <div className={styles.labelBlue}>Most Popular</div>
            <h6 className={`${styles.carTitle}`}>Premium</h6>
            <hr className="m-0"/>
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> 350</span> /Mo
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

           
              <MemberButton label="Join Now" 
              className={styles.lightBtn}
              />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Front2;
