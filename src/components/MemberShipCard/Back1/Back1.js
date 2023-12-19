import React from "react";
import styles from "../Back1/Back1.module.css";
import MemberButton from "../../MemberButton/MemberButton";
const Back1 = () => {
  return (
    <>
      <div className={styles.flipcardfront}>
        <div>
          <div className={`${styles.cardBody} card-body`}>
            <h6 className={`${styles.carTitle}`}>Focused</h6>
            <hr />
            <h6 className={`${styles.SubTitle}`}>
              <sup className={styles.card3SmText}>$</sup>{" "}
              <span className={styles.BigText}> 2700</span> /Yr
            </h6>

            <ul className={styles.pricingListOverFlow}>
              <li>Annual executive physical</li>
              <li>Tailored weight management</li>
              <li>
              Physician availability after hours for urgent matters
              </li>
              <li>There are no copays for office visits</li>
              <li>
              Labs are not a part of this package and can be billed through insurance
              </li>
             
            </ul>

     
              <MemberButton label="Join Now"
              className={styles.lightBtn} />
      
          </div>
        </div>
      </div>
    </>
  );
};

export default Back1;
