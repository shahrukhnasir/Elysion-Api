import React from "react";
import styles from "../Back3/Back3.module.css";
import MemberButton from "../../MemberButton/MemberButton";
const Back3 = () => {
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <h6 className={`${styles.carTitle}`}>Premium Plus</h6>
            <hr />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> 5100</span> /Yr
            </h6>

            <ul className={styles.pricingListOverFlow}>
              <li>insurance (coverage dependent on carrier)</li>
              <li>EKG yearly</li>
              <li>Flu test/COVID tests/strep test q 3 months as indicated</li>
              <li>Urine Analysis</li>
              <li>HbA1C in-house check q 3 months</li>
              <li>Home visits per patient need/request</li>
              <li>
                Hospital visits (this cannot entail direct medical supervision)
              </li>
              <li>
                Minor skin procedures, trigger point injections and large joint
                injections
              </li>
              <li>Pap smear+ HPV testing q 5 years</li>
            </ul>

            
              <MemberButton label="Join Now" className={styles.lightBtn} />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Back3;
