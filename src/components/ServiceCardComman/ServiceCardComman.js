import React from 'react'
import styles from '../ServiceCardComman/ServiceCardComman.module.css'
import Link from 'next/link'


const ServiceCardComman = ({ Title, Descriptions,link }) => {
  return (
    <>
      <div className={`${styles.card}  card`}>

        <div className={`${styles.cardBody}  card-body`}>
          <h6 className={`${styles.carTitle}`}>
            {Title}
          </h6>
          <p className={`${styles.cardDesc}`}>
            {Descriptions}</p>
          <Link href={link} className={`${styles.linkBtn}`}>
            <span className={styles.learnMore}>Learn more
            </span> </Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCardComman;