import React from 'react'
import TopLayout2 from '../../../components/TopLayout2/TopLayout2'
import Shadow from '../../../components/Shadow/Shadow'
import styles from "../styles.module.css"
const CurrentHealthModel = () => {
  return (
    <>
   
    <section>
         <TopLayout2
           Heading="Current health care model"
           descriptions=""
           image="/images/new/blog-current-healthcare.jpg"
         />
 
         <div className={`${styles.subContainer} container`}>
           <h1 className={styles.subHeading}>
           Current health care model
           </h1>
 
           <div className={styles.setShaowRight}>
             <Shadow />
           </div>
           <div className="pb-5">
             <p className={styles.para}>
             The health care system has evolved to include a range of administrative roles and support personnel alongside the traditional doctor-patient model, all aimed at enhancing the quality of care and customer service. In fact, there is now an approximate 1:10 ratio of doctors to other staff members that have purely administrative roles. While these additional support roles have brought some benefits, they have also introduced a significant amount of extra documentation, accountability to various individuals, and increased time spent on administrative responsibilities. Providers now allocate roughly 35% of their time to documenting patient data. This shift undeniably takes away from the precious time dedicated to patient care. In a typical outpatient setting, physicians are often limited to just 15 minutes for follow-up visits and 30 minutes for new patients. This time constraint can sometimes result in patients seeing physicians who appear rushed, trying to complete their visits promptly to accommodate the next patient's appointment. For physicians, this means making decisions about how much personal time they should allocate to reviewing patient charts, hospital records, and documenting visits after hours to ensure they can provide patients with a full 15 minutes of face-to-face time. Many physicians invest extra hours before or after clinic hours in documenting patient visits or meeting quality measure requirements. They may also find themselves working on weekends, either from home or the office, to ensure timely chart completion. In essence, providers often find themselves working for the insurance and the system, rather than solely for the benefit of the patient.
             </p>
           </div>
         </div>
       </section></>
  )
}

export default CurrentHealthModel