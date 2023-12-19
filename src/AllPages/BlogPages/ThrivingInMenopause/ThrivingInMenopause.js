import React from 'react'
import Shadow from '../../../components/Shadow/Shadow'
import TopLayout2 from '../../../components/TopLayout2/TopLayout2'
import styles from "../styles.module.css"
const ThrivingInMenopause = () => {
  return (
    <>
   
    <section>
         <TopLayout2
           Heading="Thriving in Menopause"
           descriptions="Women are the more complex gender of the species. We have become professional multitaskers"
           image="/images/new/blog-menopause.webp"
         />
 
         <div className={`${styles.subContainer} container`}>
           <h1 className={styles.subHeading}>
           Thriving in Menopause
           </h1>
 
           <div className={styles.setShaowRight}>
             <Shadow />
           </div>
           <div className="pb-5">
             <p className={styles.para}>
             Women are the more complex gender of the species. We have become professional multitaskers. We are working women, caregivers for our families, personal Ubers for our kids, cheerleaders, chefs etc. Symptoms of menopause can throw a wrench into this already chaotic existence. There are simple, natural ways to help to relieve the symptoms of menopause.1) Eat a balanced mainly plant-based diet-an anti-inflammatory diet has been associated with fewer menopausal symptoms2) Get your vitamins from food -we are often low on Vit D, omega-3s, magnesium, Zinc (supplement as needed)Fun fact: Ground flax seed-2 teaspoons per day showed similar decreases in menopausal symptoms as hormone replacement therapy3)Add phytoestrogens-these are naturally occurring chemicals that mimic estrogen in the body-flaxseed, soybeans, tofu, lentilsThere are also multiple other naturally occurring supplements that can help with hot flashes as well as mind and body approaches such as hypnosis, cognitive behavior therapy, mindfulness meditation and acupuncture.
             </p>
           </div>
         </div>
       </section></>
  )
}

export default ThrivingInMenopause