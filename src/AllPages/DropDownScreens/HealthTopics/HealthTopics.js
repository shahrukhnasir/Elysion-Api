import React from "react";
import styles from "../HealthTopics/HealthTopics.module.css";
import Link from "next/link";
import HealthCard from "../../../components/HealthCard/HealthCard";
import Shadow from "../../../components/Shadow/Shadow";
import TopLayout from "../../../components/TopLayout/TopLayout";
const HealthTopics = () => {
  const cardData = [
    {
      dr: "Dr. Alex Whitaker-Lea Joins Elysion Health",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "./images/card3.webp",
    },

    {
      dr: "Dr. Alex Whitaker-Lea Joins Elysion Health",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "./images/card2.webp",
    },

    {
      dr: "Dr. Alex Whitaker-Lea Joins Elysion Health",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      image: "./images/card1.webp",
    },
  ];

  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="Health Topics"
          descriptions="This section provides a comprehensive overview of health and wellness topics, focusing on specific medical specialties and services. It covers various subjects such as maintaining cardiovascular health, understanding how different medical specialties address similar issues, and the benefits of integrative medicine, and many other informative aspects"
          image="./images/new/Health topic.webp"
        />
        <div className={`${styles.container} container py-5`}>
          <div class="row g-0">
            <div className={styles.setShaowRight}>
              <Shadow />
            </div>
            <div className="col-lg-6">
              {/* card */}
              <div className={styles.mainCardBody}>
                <div className={styles.innerCardBody}>
                  <img src="./images/card3.webp" className="img-fluid" alt="img" />
                </div>

                <div className={styles.footerBody}>
                  <div className={styles.footerInner}>
                    <div className={styles.mainHeader}>
                      <h1>Dr. Alex Whitaker-Lea Joins Elysion Health</h1>
                    </div>

                    <div className={styles.desc}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>

                    <div className={styles.buttonSec}>
                      <Link
                        href="/healthtopicsdetails"
                        className={`${styles.linkBtn}`}
                      >
                        <span className={styles.learnMore}>Learn more</span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {cardData.map((item) => {
                return (
                  <div className={`${styles.verticalCard} card`}>
                    <div className={styles.innerCard}>
                      <div className={styles.innerHeader}>
                        <h6>{item.dr}</h6>
                      </div>
                      <div className={styles.innerDecs}>
                        <span>{item.detail}</span>

                      </div>
                      <Link
                        href="/healthdetails2"
                        className={styles.learnBtn}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className={styles.recommand}>
            <h6>Recommended For you</h6>
          </div>

          <div className="row">
            {cardData.map((item) => {
              return (
                <div className="col-lg-4">
                  <Link href="/healthtopicsdetails">
                    <HealthCard
                      Image={item?.image}
                      Title={item?.dr}
                      Descriptions={item?.detail}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthTopics;
