import React from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../ServiceProvider/ServiceProvider.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
const service = [
  {
    Title: "Internal and integrative medicine",
  },

  {
    Title: "Family Medicine",
  },
  {
    Title: "Functional Nutrition ",
  },

  {
    Title: "Lifestyle Management",
  },

  {
    Title: "Weight Loss Management",
  },

  {
    Title: "IV Hydration and Vitamin Therapy",
  },
];
const NewPatient = () => {
  const router = useRouter();
  const HandleFollowUp = (e) => {
    router.push({
      pathname: "/followup",
    });
  };
  return (
    <NewPatientLayout heading="Request Appoinment">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Provider
            </label>
            <select
              id="inputState"
              className={`${styles.selectField} form-select`}
            >
              <option selected className={styles.optionField}>
                Select Service Provider
              </option>
              <option className={styles.optionField}>Dr Henry jerry</option>
              <option className={styles.optionField}>Dr Hastie Lamyan</option>
            </select>
          </div>

          <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Reason For Visit
            </label>
            <select
              id="inputState"
              className={`${styles.selectField} form-select`}
              onChange={HandleFollowUp}
            >
              <option selected className={styles.optionField}>
                Reason For Visit
              </option>
              <option className={styles.optionField}>New-Patient</option>
              <option className={styles.optionField}>Follow-Up</option>
            </select>
          </div>

          <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Services
            </label>
            <select
              id="inputState"
              className={`${styles.selectField} form-select`}
            >
              <option selected className={styles.optionField}>
                Select Service
              </option>
              {service.map((item) => {
                return (
                  <option className={styles.optionField}>{item?.Title}</option>
                );
              })}
            </select>
          </div>
          <div className="col-lg-6">
            <p className={styles.discount}>
              Become a Member and Get a 20% Discounts
            </p>
          </div>
        </div>

        <h6 className={styles.cardTopHeading}>Service Provider</h6>

        <div className={`${styles.card} card mb-3`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./images/drprofile.png"
                className="img-fluid rounded-start"
                alt="img"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className={`${styles.cardTitle}`}>Dr. Henry Jekyll</h5>
                <p className={styles.textMuted}>Integrative Medicine Doctor</p>
                <p className={styles.textMuted}>2190 Carter Street</p>
                <p className={styles.textMuted}>Macedonia, IL 62860</p>
                <div className={styles.outlineButton}>
                  <button> Next Available Tue 2 May </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/followup" className={styles.nextBtn}>
          <CommanButton label="Next" />
        </Link>
      </div>
    </NewPatientLayout>
  );
};

export default NewPatient;
