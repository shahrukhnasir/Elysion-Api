import React from "react";
import styles from "../TopLayout2/TopLayout2.module.css";
const TopLayout2 = ({ Heading, descriptions, image,className }) => {
  return (
    <>
    {/* Custom Top Layout */}
      <section className={styles.TopSection} id={className}>
        <div>
          <div className="row">
            <div className="col-lg-5 offset-lg-1 my-auto">
              <div className="">
                <div className={styles.mainHeading}>
                    <h1>{Heading}</h1>
                    
                    </div>

                <p className={styles.Descriptions}>{descriptions}</p>
              </div>
            </div>

            <div className="col-lg-6" id={styles.banner}>
              <div
                className={styles.BackImgSection}
                style={{ backgroundImage: `url('${image}')` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopLayout2;
