import React from "react";
import styles from "../SliderProductCard/SliderProductCard.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const SliderProductCard = ({ Title, Descriptions, Price, image }) => {
  return (
    <>
      <div className={`${styles.card}  card`}>
        <img src={image} class="card-img-top" alt="..." />
        <div className={`${styles.cardBody}  card-body`}>
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <h6 className={`${styles.carTitle}`}>{Title}</h6>
            </div>

            <div className="col-lg-6">
              {" "}
              <h6 className={`${styles.cardPrice}`}>{Price}</h6>
            </div>
          </div>
          <p className={`${styles.cardDesc}`}>{Descriptions}</p>
          <Link href="/ProductDetails/2" className={`${styles.linkBtn}`}>
            <span className={styles.learnMore}>View Details</span>{" "}
            <span>
              <BsArrowRight className={styles.arrowIcon} />
            </span>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SliderProductCard;
