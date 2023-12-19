import React from "react";
import styles from "../Insurance/Insurance.module.css";
import TopLayout2 from "../../../../components/TopLayout2/TopLayout2";
const Insurance = () => {
  return (
    <>
      <div className="container-fluid p-0">
     
            <TopLayout2
            Title='Patient Resourses'
          Heading="Insurance"
          descriptions="We do not participate with any healthcare insurance plans"
          image="./images/Insurance.webp"
        />

        <div className={`${styles.subContainer} container py-5`}>
          <h1 className={styles.subHeading}>Insurance</h1>
          <div className="">
            <p className={styles.para}>
            We do not accept any insurance; full payment is expected at the time of service.  In terms of labs, you will be billed directly by the specific lab processing your laboratory tests after insurance payment has been deducted.  If you chose not to use insurance or do not have health insurance, we will provide you with low cost testing for labs/radiology services
            </p>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
