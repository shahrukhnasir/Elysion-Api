import React from "react";
import styles from "../HealthCard/HealthCard.module.css";

const HealthCard = ({ Title, Descriptions, Image, }) => {
  return (
    <>

      <div className={styles.mainCardBody}>
        <div className={styles.innerCardBody}>
          <img src={Image} className="img-fluid" alt="image" />
        </div>

        <div className={styles.footerBody}>
          <div className={styles.footerInner}>
            <div className={styles.mainHeader}>
              <h1 >{Title}</h1>
            </div>

            <div className={styles.desc}>
              <p >{Descriptions}</p>
            </div>
         </div>
          </div>
        </div>
    
    </>
  );
};

export default HealthCard;
