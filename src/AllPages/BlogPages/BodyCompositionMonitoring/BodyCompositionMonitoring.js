import React from 'react'
import TopLayout2 from '../../../components/TopLayout2/TopLayout2'
import Shadow from '../../../components/Shadow/Shadow'
import styles from "../styles.module.css"
const BodyCompositionMonitoring = () => {
  return (
    <>
   
    <section>
         <TopLayout2
           Heading="Body composition monitoring with InBody"
           descriptions=""
           image="/images/new/Blog-Inbody.jpg"
         />
 
         <div className={`${styles.subContainer} container`}>
           <h1 className={styles.subHeading}>
           Body composition monitoring with InBody
           </h1>
 
           <div className={styles.setShaowRight}>
             <Shadow />
           </div>
           <div className="pb-5">
             <p className={styles.para}>
             Elysion is proud to offer the InBody 570. This device uses an advanced form of Bioelectrical Impedance Analysis (BIA) that combines direct segmental measurements with multiple frequencies to precisely measure body composition. This is conveniently stored in an app on patients’ phones to allow changes to be tracked over time. Problems can be specifically targeted such as muscle or fat imbalances.
             </p>
           </div>
         </div>
       </section></>
  )
}

export default BodyCompositionMonitoring