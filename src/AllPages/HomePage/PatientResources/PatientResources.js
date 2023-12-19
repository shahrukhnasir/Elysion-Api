import React from "react";
import styles from "../PatientResources/PatientResources.module.css";
import PatientCard from "../../../components/PatientCard/PatientCard";
const PatientResources = () => {
  const cards = [
    {
      id: 1,
      Title: "Patient Education",
      Desc: "Empowering Your Health: Patient Education for Well-Informed Decision-Making",
      Links:"/patient-education"
    },

    {
      id: 2,
      Title: "Patient Forms",
      Desc: " MEDICAL RECORDS",
      Links:"/patient-form"
    },
    {
      id: 3,
      Title: "Patient Portal",
      Desc: "The Patient Portal offered by Elysion is a secure and convenient tool that grants you round-the-clock access to your personal health information.",
      Links:"/register"
    },

    {
      id: 4,
      Title: "Insurance",
      Desc: "We do not participate with any healthcare insurance plans for healthcare delivery",
      Links:"/insurance"
    },

    {
      id: 5,
      Title: "Financial & Billing",
      Desc: "Take a look at these resources to quickly grasp the concepts of billing and payment for services provided by Elysion Health and Wellness",
      Links:"/billing"
    },
  ];
  return (
    <>
      <div className="container-fluid py-lg-5" id="patient">
        <div className="container pt-5">
          <h1
            className={styles.mainHeading}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Patient Resources
          </h1>
          <div className="row">

          <div className="col-lg-6">
              <p
                className={`${styles.mainTitle}`}
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                At Elysion, we prioritize excellence in both clinical outcomes
                and patient experiences. Our Patient Resources serve as valuable
                tools to enhance your overall experience. Whether it's before,
                during, or after your visit, we are here to provide
                comprehensive support and assistance at every step of your
                journey with us.
              </p>
            </div>
            </div>

            <div className="row">

            

            {cards.map(card =>{
            return(
              <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <PatientCard 
              key={card?.id}
              Title={card?.Title}
              Descriptions={card?.Desc}
              LearnBtn={card?.Links}
              />
              </div>
            )
            })}
          </div>

       
        </div>
      </div>
    </>
  );
};

export default PatientResources;
