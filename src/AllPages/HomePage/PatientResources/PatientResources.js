import React, { useEffect, useState } from "react";
import styles from "../PatientResources/PatientResources.module.css";
import PatientCard from "../../../components/PatientCard/PatientCard";
import { useDispatch } from "react-redux";
import {
  PatientEducationContent,
  PatientResourceContent,
} from "../../../Service/HomePageService";
import Skeleton from "react-loading-skeleton";
const PatientResources = () => {
  const cards = [
    {
      id: 1,
      Title: "Patient Education",
      Desc: "Empowering Your Health: Patient Education for Well-Informed Decision-Making",
      Links: "/patient-education",
    },

    {
      id: 2,
      Title: "Patient Forms",
      Desc: " MEDICAL RECORDS",
      Links: "/patient-form",
    },
    {
      id: 3,
      Title: "Patient Portal",
      Desc: "The Patient Portal offered by Elysion is a secure and convenient tool that grants you round-the-clock access to your personal health information.",
      Links: "/register",
    },

    {
      id: 4,
      Title: "Insurance",
      Desc: "We do not participate with any healthcare insurance plans for healthcare delivery",
      Links: "/insurance",
    },

    {
      id: 5,
      Title: "Financial & Billing",
      Desc: "Take a look at these resources to quickly grasp the concepts of billing and payment for services provided by Elysion Health and Wellness",
      Links: "/billing",
    },
  ];
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patientEducation, setPatientEducation] = useState([]);
  useEffect(() => {
    dispatch(PatientResourceContent(setLoading, setData));
    dispatch(PatientEducationContent(setLoading, setPatientEducation));
  }, []);
  console.log(patientEducation,"patientEducation");
  return (
    <>
      <div className="container-fluid py-lg-5" id="patient">
        <div className="container pt-5">
          <h1
            className={styles.mainHeading}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {!loading ? data?.name : <Skeleton />}{" "}
          </h1>
          <div className="row">
            <div className="col-lg-6">
              <p
                className={`${styles.mainTitle}`}
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                {!loading ? data?.value : <Skeleton />}
              </p>
            </div>
          </div>

          <div className="row">
            {cards.map((card, key) => {
              return (
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  key={key}
                >
                  <PatientCard
                    key={card?.id}
                    Title={card?.Title}
                    Descriptions={card?.Desc}
                    LearnBtn={card?.Links}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientResources;
