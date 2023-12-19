import React from 'react'
import styles from '../PatientCard/PatientCard.module.css'
import Link from 'next/link'
const PatientCard = ({ Title, Descriptions, LearnBtn }) => {
  return (
    <>
      <div id={styles.mainCardBody} >
        <div className={styles.innerCardBody}>
          <div className={styles.mainHeader}>
            <h1> {Title}
            </h1>
          </div>
          <div className={styles.desc}>
            <p>{Descriptions}</p>
          </div>
          <div className={styles.buttonSec}>
            <Link href={LearnBtn} className={`${styles.linkBtn}`}>
              <span className={styles.learnMore}>Learn more
              </span> </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default PatientCard;