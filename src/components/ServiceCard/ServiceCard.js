import React from 'react'
import styles from '../ServiceCard/ServiceCard.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

const ServiceCard = ({ Title, Descriptions, classNameProp, hrf }) => {
  const router = useRouter();
  const navigateTo = (routeId) => router.push(`/servicedetails/${routeId}`)
  return (
    <>
      <div id={styles.mainCardBody} className={`${classNameProp ?? styles.classNameProp}`}>
        <div className={styles.innerCardBody}>

          <div className={styles.mainHeader}>
            <h1> {Title}
            </h1>
          </div>

          <div className={styles.desc}>
            <p>{Descriptions}</p>
          </div>

          <div className={styles.buttonSec}>

            <Link href={`${hrf}`}  className={`${styles.linkBtn}`}>
              <span className={styles.learnMore}>Learn more
              </span> </Link>
          </div>

        </div>


      </div>

    </>
  )
}

export default ServiceCard;