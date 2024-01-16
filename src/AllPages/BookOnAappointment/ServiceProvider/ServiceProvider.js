import React, { useEffect, useState } from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../ServiceProvider/ServiceProvider.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { DoctorDetails } from "../../../Service/ServiceProviders";
import Skeleton from "react-loading-skeleton";
const ServiceProvider = () => {
  const variation = [
    {
      id: 1,
      name: "1 Quart",
      price: "$7.99",
    },
    {
      id: 2,
      name: "1 Gallon/ 4 Pack",
      price: "$7.99",
    },
    {
      id: 3,
      name: "1 Quart",
      price: "$7.99",
    },
    {
      id: 4,
      name: "1 Gallon/ 4 Pack",
      price: "$7.99",
    },
    {
      id: 5,
      name: "1 Quart",
      price: "$7.99",
    },
  ];
  const [docDetails, setDocDetails] = useState([]);
  const [loading, setLoading] = useState([]);
  const token = useSelector((state) => state?.authSlice?.authToken);
  const router = useRouter();
  const dispatch = useDispatch();
  const HandleFollowUp = (event) => {
    const selectedRoute = event.target.value;
    router.push(`/${selectedRoute}`);
  };
  const slug = router.query?.docId;


  useEffect(() => {
    if (slug) {
      dispatch(DoctorDetails(slug, token, setLoading, setDocDetails));
    }
  }, [slug, token]);

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
              <option value={"/new-patient"} className={styles.optionField}>
                New-Patient
              </option>
              <option value={"/followup"} className={styles.optionField}>
                Follow-Up
              </option>
            </select>
          </div>
        </div>

        <h6 className={styles.cardTopHeading}>Service Provider</h6>
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
                    <p className={styles.textMuted}>{docDetails?.contact}</p>
                    <p className={styles.textMuted}>{docDetails?.address}</p>
                    <p className={styles.textMuted}>{docDetails?.zip_code}</p>
                    <div className={styles.outlineButton}>
                      <button> Next Available Tue 2 May </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <Skeleton />
          </>
        )}

        <Link href="/followup" className={styles.nextBtn}>
          <CommanButton label="Next" />
        </Link>
      </div>
    </NewPatientLayout>
  );
};

export default ServiceProvider;
