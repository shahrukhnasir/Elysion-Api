import Image from "next/image";
import React, { useState } from "react";
import styles from "../FlipServiceCard/FlipServiceCard.module.css";
import CommanButton from "../CommanButton/CommanButton";
import ReactCardFlip from "react-card-flip";
import Link from "next/link";
const FlipServiceCard = ({ Title, Descriptions, Img, backDesc }) => {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [flip, setFlip] = useState(false);
  // const flipCard = () => {
  //   setIsFlipped((prevState) => !prevState);
  // };
  return (
    <>
      <ReactCardFlip isFlipped={flip}
        flipDirection="vertical">
        <div id={styles.frontCard} onClick={() => setFlip(!flip)}>

          <div className={styles.cardImage}>
            <Image src={Img} width={350} height={250} className={styles.img} />

          </div>
          <div className={styles.desc}>
            <p>{Title}</p>


            <div className="text-center">
              <Link href="https://elysionhealth.md-hq.com/embedded/schedule.php">
                <CommanButton
                  label="Book Now"
                />
              </Link>
            </div>
          </div>

        </div>
        <div id={styles.backCard} onClick={() => setFlip(!flip)}>
          <h6>{Title}</h6>
          <div className={styles.backDesc}>
            <p>{backDesc}</p>
          </div>


        </div>
      </ReactCardFlip>


    </>
  );
};

export default FlipServiceCard;
