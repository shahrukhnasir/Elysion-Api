import React from "react";
import styles from "../TopLayout/TopLayout.module.css";
const TopLayout = ({ Heading, descriptions, image, className,leanMore }) => {
  return (
    <>
      {/* Custom Top Layout  style={{ backgroundImage: `url(${image}) }}`}} */}
      <section className={styles.TopSection} id={className}>
        <div>
          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <div className={styles.innerSection}>
                <h1 className={styles.mainHeading}>{Heading}</h1>

                <p className={styles.Descriptions}>{descriptions}</p>
              </div>
              {leanMore}
            </div>

            <div className="col-lg-6" id={styles.banner}>
              <div
                className={`${styles.BackImgSection} ${className}`}
                style={{ backgroundImage: `url('${image}')` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopLayout;
