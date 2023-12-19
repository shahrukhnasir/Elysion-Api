import React from "react";
import styles from "../Back2/Back2.module.css";
import MemberButton from "../../MemberButton/MemberButton";
const Back2 = () => {
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <div className={styles.label}>Most Popular</div>
            <h6 className={`${styles.carTitle}`}>Premium</h6>
            <hr className="m-0" />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> 3696</span> /Yr
            </h6>

            <ul className={styles.pricingListOverFlow}>
        
              <li>
              Physician availability after hours for urgent matters
              </li>
              <li>12% discount on all additional services
Basic annual labs
                EKG yearly</li>
              <li>
                Flu test/COVID tests/strep test q 3 months as indicated
                Urine Analysis
              </li>
              <li>HbA1C in-house check q 3 months</li>
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

export default Back2;
