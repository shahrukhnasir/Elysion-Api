import React, { useEffect, useState } from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../FollowUp/FollowUp.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CheckSlotsHandler,
  LastVisit,
  SelectServiceProvider,
} from "../../../Service/ServiceProviders";
import { useDispatch, useSelector } from "react-redux";
import removeDate from "../../../Redux/Appoinment/appointDate";
import { Skeleton } from "antd";
const FollowUp = () => {
  const token = useSelector((state) => state?.authSlice?.authToken);
  const currentDate = useSelector((state) => state?.currentDate?.currentDate);
  const time = useSelector((state) => state?.appointment?.appointment?.from);

  const dispatch = useDispatch();
  const router = useRouter();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [lastVisit, setLastVisit] = useState([]);
  const slug = router.query?.service;
  const HandleFollowUp = (event) => {
    const selectedRoute = event.target.value;
    router.push(`/${selectedRoute}`);
  };

  useEffect(() => {
    dispatch(SelectServiceProvider(token, setLoading, setService));
    dispatch(LastVisit(token, setLoading, setLastVisit));
  }, [token]);
  console.log(lastVisit, "lastVisit");
  const handleNext = (e) => {
    e.preventDefault();
    if (selectedOption !== "") {
      router.push({
        // pathname: "/followup",
        query: { service: selectedOption },
      });
      console.log();
      setIsValid(false);

      let data = new FormData();
      data.append("doc_id", slug);
      data.append("time", time);
      data.append("date", currentDate);
      dispatch(CheckSlotsHandler(token, data, setLoading, router));
    } else {
      router.push({
        // pathname: "/new-patient",
        query: { service: selectedOption },
      });
      setIsValid(true);
    }
  };

  const handle = () => {
    dispatch(removeDate());
    console.log("Removing");
  };
  const handleSelectChange = (e) => {
    const id = e.target.value;
    // dispatch(removeDate());
    router.push({
      pathname: "/followup",
      query: { service: id },
    });
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setIsValid(selectedValue !== "");
    setIsValid(false);
  };

  return (
    <NewPatientLayout heading="Request Appoinment">
      {/* <button onChange={handle}>aaa</button> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 p-0">
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
                {isValid ? (
                  <p style={{ color: "red" }}>Please select provider</p>
                ) : (
                  ""
                )}
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
              <option value={"/new-patient"} className={styles.optionField}>
                New-Patient
              </option>
              <option value={"/followup"} className={styles.optionField}>
                Follow-Up
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Card */}

      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-1 p-0">
            {lastVisit ? (
              <>
                <h1 className={styles.cardTopHeading}>Last Visit Details</h1>

                {!loading ? (
                  <>
                    {
                      <div className={styles.card}>
                        <div className="row">
                          <div className="col-lg-6">
                            <article className={styles.cardTitle}>
                              Service
                            </article>
                          </div>
                          <div className="col-lg-6 p-0">
                            <article className={styles.cardDetail}>
                              {lastVisit?.service?.name}
                            </article>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <article className={styles.cardTitle}>
                              Service Provider
                            </article>
                          </div>
                          <div className="col-lg-6 p-0">
                            <article className={styles.cardDetail}>
                              {lastVisit?.first_name}-{lastVisit?.last_name}
                            </article>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <article className={styles.cardTitle}>Fees</article>
                          </div>
                          <div className="col-lg-6 p-0">
                            <article className={styles.cardDetail}>
                              ${lastVisit?.service?.price}
                            </article>
                          </div>
                        </div>
                        {/* <div className="row">
                <div className="col-lg-6">
                  <article className={styles.cardTitle}>Date</article>
                </div>
                <div className="col-lg-6 p-0">
                  <article className={styles.cardDetail}>{lastVisit?.date}</article>
                </div>
              </div> */}
                        <div className="">
                          <h1 className={styles.cardTextBlue}>
                            Appointment Detail
                          </h1>
                          <p className={styles.cardPara}>
                            {lastVisit?.service?.sub_heading}
                          </p>
                        </div>

                        <hr />

                        <div className="row">
                          <div className="col-lg-6">
                            <h1 className={styles.cardTextBlue}>
                              Total Amount
                            </h1>
                          </div>
                          <div className="col-lg-6">
                            <h1 className={styles.cardLastPrice}>
                              $ {lastVisit?.total}
                            </h1>
                          </div>
                        </div>
                      </div>
                    }
                  </>
                ) : (
                  <Skeleton />
                )}
              </>
            ) : (
              <CommanButton label="No Last Visit" />
            )}

            {/* {lastVisit && } */}

            <div className="py-3" id={styles.nextBtn}>
              <Link href="" onClick={handleNext}>
                <CommanButton label="Next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
    </NewPatientLayout>
  );
};

export default FollowUp;
