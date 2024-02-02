import React from 'react'
import styles from '../ServiceCardComman/ServiceCardComman.module.css'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'


const ServiceCardComman = ({ Title, Descriptions, Price, image, id, onClick }) => {
  return (
    <>
      <div className={`${styles.card}  card`} onClick={onClick}>
        <img src={image} class="card-img-top" alt="image" />
        <div className={`${styles.cardBody}`} id={styles.cardInner}>
          <div className="row">
            <div className="col-lg-12">
              <div className={`${styles.cardTitleSec}`}>
                <h6 className={`${styles.carTitle} ${styles.lineclamp1}`}>{Title}</h6>
              </div>
            </div>

            <div className="col-lg-6">
              {" "}
              <h6 className={`${styles.cardPrice}`}>{Price}</h6>
            </div>
          </div>
          <p className={`${styles.cardDesc} ${styles.lineclamp1}`}>{Descriptions}</p>
          <Link href={""} className={`${styles.linkBtn}`}>
            <span className={styles.learnMore}>View Details</span>{" "}
            <span>
              <BsArrowRight className={styles.arrowIcon} />
            </span>{" "}
          </Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCardComman;