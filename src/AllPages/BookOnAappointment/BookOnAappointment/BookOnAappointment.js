import React, { useEffect, useState } from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../BookOnAappointment/BookOnAppointment.module.css";
import { useRouter } from "next/router";
import { SelectServiceProvider } from "../../../Service/ServiceProviders";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { AllServices } from "../../../Service/HomePageService";

// const service = [
//     {
//         Title: "Internal and integrative medicine",

//     },

//     {
//         Title: "Family Medicine",

//     },
//     {
//         Title: "Functional Nutrition ",

//     },

//     {
//         Title: "Lifestyle Management",

//     },

//     {
//         Title: "Weight Loss Management",

//     },

//     {
//         Title: "IV Hydration and Vitamin Therapy",

//     },
// ];

const BookOnAappointment = () => {
  const token = useSelector((state) => state?.authSlice?.authToken);
  const dispatch = useDispatch();
  const router = useRouter();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allService, setServicesData] = useState([]);

  useEffect(() => {
    dispatch(SelectServiceProvider(token, setLoading, setService));
    dispatch(AllServices(setLoading, setServicesData));
  }, []);
  console.log(service, "service");

  const handleServiceProvider = (id) => {
    console.log(id, "id");

    router.push({
      pathname: "/serviceprovider",
      query: { docId: id },
    });
  };

  const HandleFollowUp = (event) => {
    const selectedRoute = event.target.value;
    router.push(`/${selectedRoute}`);
  };
  const services = [
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
  return (
    <NewPatientLayout heading="Request Appoinment">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Provider
            </label>
            {!loading ? (
              <select
                id="inputState"
                className={`${styles.selectField} form-select`}
                onChange={(e) => handleServiceProvider(e.target.value)}
              >
                {service?.map((list, i) => (
                  <option key={i} value={list?.id}>
                    {list?.first_name}
                  </option>
                ))}
              </select>
            ) : (
              <>
                <div className="">
                  <select
                    id="inputState"
                    className={`${styles.selectField} form-select`}
                    onChange={(e) => handleServiceProvider(e.target.value)}
                  >
                    <option>Loading...</option>
                  </select>
                </div>
              </>
            )}
          </div> */}

          <div className="col-lg-8">
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
              <option value={"/new-patient"} className={styles.optionField}>
                New-Patient
              </option>
              <option value={"/followup"} className={styles.optionField}>
                Follow-Up
              </option>
            </select>
          </div>

          {/* <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Services
            </label>
            
              {!loading ? (
                <>
                <select
              id="inputState"
              className={`${styles.selectField} form-select`}
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
                      onChange={(e) => handleServiceProvider(e.target.value)}
                    >
                      <option>Loading...</option>
                    </select>
                  </div>
                </>
              )}
          
          </div> */}
        </div>
      </div>
    </NewPatientLayout>
  );
};

export default BookOnAappointment;
