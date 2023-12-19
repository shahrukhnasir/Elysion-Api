import React from 'react'
import styles from "../styles.module.css"
import TopLayout2 from '../../../components/TopLayout2/TopLayout2'
import Shadow from '../../../components/Shadow/Shadow'
const ElysionOrigins = () => {
  return (
   <>
   
   <section>
        <TopLayout2
          Heading="Elysion Origins of the Name"
          descriptions="Elysion is an unusual name. It is a Greek word that has transformed over time to mean any place or state of bliss or delight."
          image="/images/new/blog-Elysion-origins.webp"
        />

        <div className={`${styles.subContainer} container`}>
          <h1 className={styles.subHeading}>
            Elysion Origins of the Name
          </h1>

          <div className={styles.setShaowRight}>
            <Shadow />
          </div>
          <div className="pb-5">
            <p className={styles.para}>
            Elysion is an unusual name. It is a Greek word that has transformed over time to mean “any place or state of bliss or delight.” I chose this name for my medical practice after seeing a Sci Fi movie Elysium approximately 10 years ago. I was fascinated by the Elysium healing machine which was able to detect and cure any disease in a short time with no apparent side effects or patient discomfort. This concept of healing represents a lot of what physicians would like to offer their patients-healing without any suffering. This thought has lingered with me for all these years and although the original name in mind, Elysium, is now a part of multiple medical practices, I chose the less known origin “Elysion” to represent my vision of healing. For me, Elysion represents a tranquil place that does not feel like a doctor’s office where patients can share their thoughts, preferences and ideas of wellness, healing and disease. It is a place where patients and their doctor can truly formulate an individualized health plan using all tools available to minimize side effects, suffering, discomfort and promote Wellness.
            </p>
          </div>
        </div>
      </section></>
  )
}

export default ElysionOrigins