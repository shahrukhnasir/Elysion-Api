import React, { useEffect, useState } from "react";
import styles from "../TY/TY.module.css";
import { useRouter } from "next/router";
const TY = () => {
  const thankYou = [
    {
      id: 1,
      title: "Free Consultation"
    },
    {
      id: 2,
      title: "Contact"
    },
    {
      id: 3,
      title: 'Check out'
    },
    {
      id: 4,
      title: 'Join Our Email'
    },
    {
      id: 5,
      title: 'Becoming a Member'
    },

  ]
  const [filterData, setFilterData] = useState("");

  const router = useRouter();
  const data = (routeId = 1) => {
    const filterCollection = thankYou.filter(
      (ID) => ID?.id == routeId
    );
    console.log(filterCollection, "filterCollection")
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
        <div className={`${styles.container} container py-5`}>
          <div className="row d-flex justify-content-center">
            <div className={styles.tYouCard}>


              <div className={styles.card}>



                <h1 className={styles.topHeading}>Thank You</h1>

                <p className={styles.topSubDecs}>
                  Thank you for contacting us, you will receive a confirmation via email.
                  If you need more immediate assistance, please call 470-300-2259
                  
                </p>

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
export default TY;
