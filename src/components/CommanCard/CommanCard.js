import React from "react";
import styles from "../CommanCard/CommanCard.module.css";
import Link from "next/link";

const CommanCard = ({ Title, Descriptions, classNameProp, onClick }) => {
  return (
    <>
      <div
        id={styles.mainCardBody}
        className={`${classNameProp ?? styles.classNameProp}`}
        onClick={onClick}
      >
        <div className={styles.innerCardBody}>
          <div className={styles.mainHeader}>
            <h1> {Title}</h1>
          </div>

          <div className={styles.desc}>
            <p>{Descriptions}</p>
          </div>

          <div className={styles.buttonSec}>
            {/* <Link href={`/homeservice/${id && id}`} className={`${styles.linkBtn}`}> */}
            <Link href={""} className={`${styles.linkBtn}`} >
              <span className={styles.learnMore}>Learn more</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommanCard;
