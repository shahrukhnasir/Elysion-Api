import React from "react";
import styles from "../ProductCard/ProductCard.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const ProductCard = ({ Title, Descriptions, Price, image, id ,onClick}) => {
  return (
    <>
      <div className={`${styles.card}  card`} onClick={onClick}>
        <img src={image} class="card-img-top" alt="image" />
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
          <Link href={""} className={`${styles.linkBtn}`}>
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

export default ProductCard;
