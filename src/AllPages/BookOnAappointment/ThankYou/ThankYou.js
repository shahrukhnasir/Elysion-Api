import React, { useEffect, useState } from "react";
import styles from "../ThankYou/ThankYou.module.css";
import { useRouter } from "next/router";
const ThankYou = () => {
  const thankYou = [
    {
      id: 1,
      title: 'Check out'
    },
  ]
  const [filterData, setFilterData] = useState("");

  const router = useRouter();
  const data = (routeId = 1) => {
    const filterCollection = thankYou.filter(
      (ID) => ID?.id == routeId
    );

    setFilterData(...filterCollection);
  };

  useEffect(() => {
    data(router?.query?.id);
  }, [router?.query?.id]);

  return (
    <>
      <div className="container-fluid p-0">
        <div className={styles.ProfileTopSection}>
          <div className={styles.Title}>
            <h2>Thank You</h2>
          </div>
        </div>
        {/* Card */}
        <div className={`${styles.container} container py-lg-5`}>
          <div className="row d-flex justify-content-center">
            <div className={styles.tYouCard}>
              <h1 className={styles.topHeading}>Thank You</h1>
              <p className={styles.topSubDecs}>
                For {filterData && filterData?.title} has been successfully.
              </p>
              <div className={styles.card}>

                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.appoint_text_id}>Appointment ID</article>
                  </div>
                  <div className="col-lg-6 p-0">
                    <article className={styles.appoit_id}>
                      #01094658
                    </article>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>Service</article>
                  </div>
                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>
                      Functional Nutrition
                    </article>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>
                      Service Provider
                    </article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>
                      Dr. Henry Jekyll
                    </article>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <article className={styles.cardTitle}>Fees</article>
                  </div>

                  <div className="col-lg-6 p-0">
                    <article className={styles.cardDetail}>$150.0</article>
                  </div>
                </div>
                <div className="">
                  <h1 className={styles.cardTextBlue}>Appointment Detail</h1>

                  <p className={styles.cardPara}>
                    Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do
                    eiusmod tempor incididunt ut labore dolore magna aliqua ut
                    enim ad.
                  </p>
                </div>

                <hr />

                <div className="row">
                  <div className="col-lg-6">
                    <h1 className={styles.cardTextBlue}>Total Amount</h1>
                  </div>

                  <div className="col-lg-6">
                    <h1 className={styles.cardLastPrice}>$170.0</h1>
                  </div>
                </div>
              </div>
              <div className="py-3"></div>
            </div>
          </div>
        </div>
        {/* Card */}
      </div>
    </>
  );
};
export default ThankYou;
