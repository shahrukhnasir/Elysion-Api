import React, { useState } from "react";
import styles from "../AboutUsScreen/AboutusScreen.module.css";
import CommanButton from "../../components/CommanButton/CommanButton";
import Shadow from "../../components/Shadow/Shadow";
import TopLayout from "../../components/TopLayout/TopLayout";
import TeamCard from "../../components/TeamCard/TeamCard";
function AboutusScreen() {
 
  const Team = [
    {
      imgPath: "./images/Team/card7.jpg",
      name: "Dr.Tessa Gibson",
      description: "M.D., C.F.N.C."
    },
    {
      imgPath: "./images/Team/card6.png",
      name: "Michelle Byers ",
      description: "Office manager/Medical assistant"
    },
   
  ];
  return (
    <>
      <div className="container-fluid p-0">
        <TopLayout
          Heading="About Us"
          descriptions="Elysion Health & Wellness in Marietta, Georgia offers a personalized and concierge-style Internal & Integrative Medicine service. Led by Dr. Tessa Gibson, the dedicated team provides comprehensive and individualized healthcare, blending conventional medicine with evidence-based integrative therapies."
          image={`/images/about-us.png`}
          leanMore={
            <p className={styles.Desc}>
              The practice focuses on addressing the root causes of diseases, empowering patients to take an active role in their health, and creating a healing environment that supports the body's innate ability to restore balance. With expertise in internal medicine, integrative medicine, non-surgical aesthetics, and intimate health treatments, Elysion aims to help patients look and feel their best.
            </p>
          }

        />
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="text-center">
              <h1 className={styles.TeamHeading}>Meet Our Team</h1>
            </div>

            {Team.map((item) => {
              return (
                <div className="col-lg-4" data-aos="flip-left">
                  <div className="">

              
                  <TeamCard
                    Pic={item.imgPath}
                    name={item.name}
                    description={item?.description}
                  />
                      </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 px-0">
              <div className={styles.BlueSection} data-aos="fade-up">
                <h1 className={styles.BlueHeading}>Our Mission</h1>

                <p className={styles.BlueText}>
                  Our Internal & Integrative Medicine practice is dedicated to providing comprehensive and personalized healthcare that combines conventional medicine with evidence-based integrative therapies. We aim to address the underlying causes of disease, empower patients to take an active role in their health, and create a healing environment that supports the body's innate ability to heal and restore balance. By staying at the forefront of medical advancements and integrating holistic approaches, we offer individualized treatment plans. We value open communication, respect, and compassion, building strong relationships with our patients. Our mission is to inspire and educate, bridging the gap between conventional and complementary therapies, and supporting patients in achieving optimal health and well-being
                </p>
              </div>
            </div>

            <div className="col-lg-6 px-0">
              <div className={styles.GraySection} data-aos="fade-down">
                <h1 className={styles.GrayHeading}>Our Vision</h1>

                <p className={styles.GaryText}>
                  Our Internal & Integrative Medicine practice has a vision to be a leader in transforming healthcare by promoting a holistic approach to wellness and healing. We aim to integrate conventional medicine with evidence-based integrative therapies, providing personalized and effective treatment plans. Our vision includes creating a healing sanctuary where patients are active participants in their healthcare, fostering trust, empathy, and open communication. We aspire to advocate for the advancement of integrative medicine, bridging the gap between conventional and complementary therapies. Ultimately, our vision is to contribute to a healthier society where individuals are empowered to live balanced lives and achieve optimal health and well-being
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  );
}

export default AboutusScreen;
