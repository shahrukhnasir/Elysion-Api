import React, { useState } from "react";
import styles from "../MemberShip/MemberShip.module.css";
import TopLayout from "../../components/TopLayout/TopLayout";
import Back1 from "../../components/MemberShipCard/Back1/Back1";
import Front2 from "../../components/MemberShipCard/Front2/Front2";
import Back2 from "../../components/MemberShipCard/Back2/Back2";
import Front3 from "../../components/MemberShipCard/Front3/Front3";
import Back3 from "../../components/MemberShipCard/Back3/Back3";
import Front1 from "../../components/MemberShipCard/Front1/Front1";
const MemberShip = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);


  const flipCard = (e, value) => {
    e.preventDefault();
    if (value === 1) {
      setIsFlipped1((prevState) => !prevState);
    }
    if (value === 2) {
      setIsFlipped2((prevState) => !prevState);
    }
    if (value === 3) {
      setIsFlipped3((prevState) => !prevState);
    }

  };
  return (
    <>
      <div className="container-fluid p-0">
        {/* cards */}
        <TopLayout
          Heading="Health Plan"
          descriptions="If you're finding it challenging to choose a care plan, you can schedule a complimentary 15-minute tele-consultation with Dr. Gibson to discuss your options"
          image="../images/new/health plan.webp"
        />

        <div className={`${styles.Container} container py-5`}>
          <div className="row">
          <div className="col-lg-4">
              <div
                className={`${styles.flipCard} ${isFlipped1 ? styles.flipped : ""
                  }`}
                onClick={(e) => flipCard(e, 1)}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <Front1 className={styles.button}
                    />
                  </div>
                  <div className={styles.flipCardBack}>
                    <Back1 />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className={`${styles.flipCard} ${isFlipped2 ? styles.flipped : ""
                  }`}
                onClick={(e) => flipCard(e, 2)}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <Front2 />
                  </div>
                  <div className={styles.flipCardBack}>
                    <Back2 />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className={`${styles.flipCard} ${isFlipped3 ? styles.flipped : ""
                  }`}
                onClick={(e) => flipCard(e, 3)}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <Front3 />
                  </div>
                  <div className={styles.flipCardBack}>
                    <Back3 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberShip;
