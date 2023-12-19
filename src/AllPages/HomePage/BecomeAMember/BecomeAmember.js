import React, { useState } from "react";
import styles from "../BecomeAMember/BecomeAmember.module.css";
import Shadow from "../../../components/Shadow/Shadow";
import Front1 from "../../../components/MemberShipCard/Front1/Front1";
import Back1 from "../../../components/MemberShipCard/Back1/Back1";
import Front2 from "../../../components/MemberShipCard/Front2/Front2";
import Back2 from "../../../components/MemberShipCard/Back2/Back2";
import Front3 from "../../../components/MemberShipCard/Front3/Front3";
import Back3 from "../../../components/MemberShipCard/Back3/Back3";

const BecomeAmember = () => {
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
      <div className={`container-fluid ${styles.memberShip}`} id="memberShip">
        <div className={styles.setShaowLeft}>
          <Shadow />
        </div>

        <div className={styles.setShaowRight}>
          <Shadow />
        </div>
        <div className={`${styles.Container} container py-5`}>
          <div className="">
            <h1
              className={styles.mainHeading}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Become a Member
            </h1>
            <p
              className={styles.Description}
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              There are three membership options available, each of which
              includes a thorough evaluation by our doctor from a functional
              medicine perspective. The evaluation will be followed by
              personalized recommendations for targeted nutritional guidance,
              movement plans, and other lifestyle interventions
            </p>
          </div>
          {/* <div className={`card ${flip  ?  "FlipCard" :"flipcardinner"}`} onClick={flipHandler} > */}
          <div className="row">
            <div className="col-lg-4">
              <div
                className={`${styles.flipCard} ${isFlipped1 ? styles.flipped : ""
                  }`}
                onClick={(e) => flipCard(e, 1)}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <Front1 />
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

export default BecomeAmember;
