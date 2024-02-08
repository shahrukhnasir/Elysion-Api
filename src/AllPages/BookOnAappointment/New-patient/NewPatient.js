import React, { useEffect, useState } from "react";
import NewPatientLayout from "../../../layout/NewPatientLayout/NewPatientLayout";
import styles from "../ServiceProvider/ServiceProvider.module.css";
import CommanButton from "../../../components/CommanButton/CommanButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AllServiceCards } from "../../../Service/HomePageService";
import {
  CheckSlotsHandler,
  DoctorDetails,
  SelectServiceProvider,
} from "../../../Service/ServiceProviders";
import { setSelectService } from "../../../Redux/Appoinment/selectService";
import Skeleton from "react-loading-skeleton";
import withAuth from "../../../pages/utils/withAuth";

const NewPatient = () => {
  const token = useSelector((state) => state?.authSlice?.authToken);
  const currentDate = useSelector((state) => state?.currentDate?.currentDate);
  const time = useSelector((state) => state?.appointment?.appointment?.from);

  const dispatch = useDispatch();
  const router = useRouter();
  const [service, setService] = useState([]);
  const [docDetails, setDocDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allService, setServicesData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isServiceValid, setIsServiceValid] = useState(false);
  const slug = router.query?.docId;

  //👇 Service Providers Api implement and All Services implement
  useEffect(() => {
    dispatch(SelectServiceProvider(token, setLoading, setService));
    dispatch(AllServiceCards(setLoading, setServicesData));
  }, [token]);
  // const  pageName =router.query.page?.split('/')?.[1]

//👇Doctor Details Api implementation
  useEffect(() => {
    if (slug) {
      dispatch(DoctorDetails(slug, token, setLoading, setDocDetails));
    }
  }, [slug, token, currentDate, time]);
  const HandleFollowUp = (e) => {
    router.push({
      pathname: "/followup",
    });
  };

  //👇Hanlde Next page Function With 👇 Slots Available Api implementation
  const handleNext = (e) => {
    e.preventDefault();
    if (selectedOption !== "" && selectedService !== "") {
      router.push({
        // pathname: "/followup",
        query: { docId: selectedOption },
      });
      e.preventDefault();
      setIsValid(false);
      setIsServiceValid(false);

      let data = new FormData();
      data.append("doc_id", slug);
      data.append("time", time);
      data.append("date", currentDate);
      dispatch(CheckSlotsHandler(token, data, setLoading, router));
    } else {
      router.push({
        // pathname: "/new-patient",
        query: { docId: selectedOption },
      });
      setIsValid(true);
      setIsServiceValid(true);
    }
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    const id = e.target.value;
    router.push({
      // pathname: "/new-patient",
      query: { docId: id },
    });
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setIsValid(selectedValue !== "");
    setIsValid(false);
  };

  const handleSelectService = (e) => {
    const selectedValue = e.target.value;
    setSelectedService(selectedValue);
    setIsServiceValid(selectedValue !== "");
    setIsServiceValid(false);
    dispatch(setSelectService(selectedValue));
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

          {/* <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Reason For Visit
            </label>
            <select
              id="inputState"
              className={`${styles.selectField} form-select`}
              onChange={HandleFollowUp}
            >
              <option selected className={styles.optionField}>
              Patient type  : {pageName}
              </option>
             
              
            </select>
          </div> */}

          <div className="col-lg-6">
            <label for="inputState" className={`${styles.Label} form-label`}>
              Services
            </label>

            {!loading ? (
              <>
                <select
                  id="inputState"
                  className={`${styles.selectField} form-select`}
                  onChange={(e) => handleSelectService(e)}
                  value={selectedService}
                >
                  <option value="" className={styles.optionField}>
                    Select Service
                  </option>

                  {allService?.map((item, i) => (
                    <option
                      key={i}
                      value={item?.id}
                      className={styles.optionField}
                    >
                      {item?.name}
                    </option>
                  ))}
                </select>
                {isServiceValid ? (
                  <p style={{ color: "red" }}>Please select service</p>
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
            <p className={styles.discount}>
              Become a Member and Get a 20% Discounts
            </p>
          </div>
        </div>
        {docDetails && Object.keys(docDetails).length > 0 ? (
          <h6 className={styles.cardTopHeading}>Service Provider</h6>
        ) : (
          <>
            <Skeleton avatar paragraph={{ rows: 4 }} loading={loading} />
          </>
        )}

        <div className={`${styles.card} card mb-3`}>
          <div className="row g-0">
            <div className="col-md-8">
              {docDetails && Object.keys(docDetails).length > 0 ? (
                <>
                  <div className={`${styles.card} card mb-3`}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className={styles?.card_img}>
                          <img
                            src={docDetails?.image_url}
                            className="img-fluid rounded-start"
                            alt="Dr-image"
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
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href=""
                    onClick={(e) => handleNext(e)}
                    className={styles.nextBtn}
                  >
                    <CommanButton label="Next" />
                  </Link>
                </>
              ) : (
                <>
                  <Skeleton avatar paragraph={{ rows: 4 }} loading={loading} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </NewPatientLayout>
  );
};

export default withAuth(NewPatient);
