import React, { useEffect, useState } from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../ServiceProvider/ServiceProvider.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AllServices } from "../../../Service/HomePageService";
import {
  DoctorDetails,
  SelectServiceProvider,
} from "../../../Service/ServiceProviders";
import Skeleton from "react-loading-skeleton";
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
  const token = useSelector((state) => state?.authSlice?.authToken);
  const dispatch = useDispatch();
  const router = useRouter();
  const [service, setService] = useState([]);
  const [docDetails, setDocDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allService, setServicesData] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");
  const [isValid, setIsValid] = useState(false);
  const slug = router.query?.docId;
  useEffect(() => {
    dispatch(SelectServiceProvider(token, setLoading, setService));
    dispatch(AllServices(setLoading, setServicesData));
  }, []);



  useEffect(() => {
    if (slug) {
      dispatch(DoctorDetails(slug, token, setLoading, setDocDetails));
    }
  }, [slug, token]);
  const HandleFollowUp = (e) => {
    router.push({
      pathname: "/followup",
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log(e, "handleNext");

    if (selectedOption !== "") {
      router.push({
        pathname: "/followup",
        query: { docId: selectedOption },
      });
    } else {
      router.push({
        pathname: "/new-patient",
        query: { docId: selectedOption },
      });
      setIsValid(true);
    }
  };

  const handleSelectChange = (e) => {
    const id = e.target.value;
    router.push({
      pathname: "/new-patient",
      query: { docId: id },
    });
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setIsValid(selectedValue !== "");
    setIsValid(false);
  };
  return (
    <NewPatientLayout heading="Request Appoinment">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Select Service Provider
            </label>
            {!loading ? (
              <>
                <select
                  id="inputState"
                  className={`${styles.selectField} form-select`}
                  value={selectedOption}
                  onChange={(e) => handleSelectChange(e)}
                >
                  <option value="">Select</option>
                  {service?.map((list, i) => (
                    <option key={i} value={list?.id}>
                      {list?.first_name}
                    </option>
                  ))}
                </select>
                {isValid ? <p style={{ color: "red" }}>Please select</p> : ""}
              </>
            ) : (
              <>
                <div className="">
                  <select
                    id="inputState"
                    className={`${styles.selectField} form-select`}
                  >
                    <option>Loading...</option>
                  </select>
                </div>
              </>
            )}
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

            {!loading ? (
              <>
                <select
                  id="inputState"
                  className={`${styles.selectField} form-select`}
                  onChange={(e) => handleSelectChange(e)}
                >
                  <option selected className={styles.optionField}>
                    Select Service
                  </option>
                  {allService.map((item, i) => {
                    return (
                      <option className={styles.optionField}>
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : (
              <>
                <div className="">
                  <select
                    id="inputState"
                    className={`${styles.selectField} form-select`}
                  >
                    <option>Loading...</option>
                  </select>
                </div>
              </>
            )}
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
            <div className="col-md-8">
              {!loading ? (
                <>
                  <div className={`${styles.card} card mb-3`}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className={styles?.card_img}>
                          <img
                            src={docDetails?.image_url}
                            className="img-fluid rounded-start"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className={`${styles.cardTitle}`}>
                            {docDetails?.first_name}
                          </h5>
                          <p className={styles.textMuted}>
                            {docDetails?.designation}
                          </p>
                          <p className={styles.textMuted}>
                            {docDetails?.contact}
                          </p>
                          <p className={styles.textMuted}>
                            {docDetails?.address}
                          </p>
                          <p className={styles.textMuted}>
                            {docDetails?.zip_code}
                          </p>
                          <div className={styles.outlineButton}>
                            <button> Next Available Slots </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>Select one</>
              )}
            </div>
          </div>
        </div>

        <Link href="" onClick={(e) => handleNext(e)} className={styles.nextBtn}>
          <CommanButton label="Next" />
        </Link>
      </div>
    </NewPatientLayout>
  );
};

export default NewPatient;
