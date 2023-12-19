import React from 'react'
import TopLayout2 from '../../../components/TopLayout2/TopLayout2'
import Shadow from '../../../components/Shadow/Shadow'
import styles from "../styles.module.css"
const TheSkinnyFasting = () => {
  return (
    <>
   
    <section>
         <TopLayout2
           Heading="The Skinny on Fasting"
           descriptions="Is fasting a new concept Not at all, an old Hebrew proverb states ,He that eats until he is sick must fast until he is well"
           image="/images/new/blog-Fasting.webp"
         />
 
         <div className={`${styles.subContainer} container`}>
           <h1 className={styles.subHeading}>
           The Skinny on Fasting
           </h1>
 
           <div className={styles.setShaowRight}>
             <Shadow />
           </div>
           <div className="pb-5">
             <p className={styles.para}>
             Is fasting a new concept Not at all, an old Hebrew proverb states “He that eats until he is sick must fast until he is well.” We all fast when we sleep. However, this fasting window has lessened over time as food has become more readily accessible at all hours of the day. And while most of us would not even consider not eating for a day, eating for a 10-hr. window daily might be an acceptable alternative. Patients are given the flexibility to find an eating window that is suitable to their lifestyle. Time restricted eating (TRE) has been shown to be a good option to improve metabolic health. This perhaps is a more sustainable long-term eating pattern. Calorie restriction has been shown to increase longevity in many animal models and in humans has been shown to slow the pace of aging and increase longevity in healthy adults. Benefits include decreased free radicals and oxidative stress. Mitochondria become more efficient. There have been proven benefits of TRE on hypertension, libido, mood, lipid levels and sleep. Prolonged fasting over 24 hrs. should always be medically supervised; preventing muscle loss in this circumstance is crucial.
             </p>
           </div>
         </div>
       </section></>
  )
}

export default TheSkinnyFasting